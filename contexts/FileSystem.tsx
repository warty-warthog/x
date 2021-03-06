import index from '@/public/index.json';

import type { FSModule } from 'browserfs/dist/node/core/FS';
import type { FC } from 'react';

import { createContext, useEffect, useState } from 'react';
import * as BrowserFS from 'browserfs';
import { writableJsonFs } from '@/utils/fs';

export const FileContext = createContext<FSModule>({} as FSModule);

export const FileProvider: FC = ({ children }) => {
  const [fs, setFs] = useState<FSModule>({} as FSModule);

  useEffect(() => {
    BrowserFS.install(window);

    BrowserFS.configure(
      {
        fs: 'MountableFileSystem',
        options: {
          ...writableJsonFs('/', index)
        }
      },
      () => {
        setFs(BrowserFS.BFSRequire('fs'));
      }
    );
  }, []);

  return <FileContext.Provider value={fs}>{children}</FileContext.Provider>;
};

export default FileProvider;
