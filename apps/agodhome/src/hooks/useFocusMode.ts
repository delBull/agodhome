//import useLocalStorageState from 'use-local-storage-state';
import { useState } from 'react';

//const LOCAL_STORAGE_KEY = 'ng-focus-mode';

function useFocusMode() {
  const [focusMode, setFocusMode] = useState<boolean>(false)

  return {
    focusMode,
    setFocusMode,
  }
}

export default useFocusMode;