import React, {
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {AppState, Platform} from 'react-native';
import {
  PERMISSIONS,
  PermissionStatus,
  check,
  openSettings,
  request,
} from 'react-native-permissions';

export interface PermissionState {
  locationStatus: PermissionStatus;
}

export const permissionInitState: PermissionState = {
  locationStatus: 'unavailable',
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface ContextProps {
  permissions: PermissionState;
  askLocationPermission: () => void | Promise<void>;
  checkLocationPermission: () => void | Promise<void>;
}

const providerValueDummy: ContextProps = {
  permissions: {...permissionInitState},
  askLocationPermission: () => {},
  checkLocationPermission: () => {},
};

export const PermissionContext = createContext<ContextProps>({
  ...providerValueDummy,
});

export const PermissionProvider = ({children}: Props) => {
  const [permissions, setPermissions] = useState({...permissionInitState});

  useEffect(() => {
    checkLocationPermissionStatic.current();

    const locationListener = AppState.addEventListener('change', state => {
      if (state !== 'active') {
        return;
      }

      checkLocationPermissionStatic.current();
    });

    return () => locationListener.remove();
  }, []);

  const askLocationPermission = async () => {
    let permissionStatus: PermissionStatus;
    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }

    setPermissions({...permissions, locationStatus: permissionStatus});
  };

  const checkLocationPermission = async () => {
    let permissionStatus: PermissionStatus;
    if (Platform.OS === 'ios') {
      permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }

    if (permissionStatus === 'blocked') {
      openSettings();
    }

    setPermissions({...permissions, locationStatus: permissionStatus});
  };

  const askLocationPermissionStatic = useRef(askLocationPermission);
  const checkLocationPermissionStatic = useRef(checkLocationPermission);

  const providerValue = useMemo(
    () => ({
      permissions,
      askLocationPermission: askLocationPermissionStatic.current,
      checkLocationPermission: checkLocationPermissionStatic.current,
    }),
    [permissions],
  );

  return (
    <PermissionContext.Provider value={providerValue}>
      {children}
    </PermissionContext.Provider>
  );
};
