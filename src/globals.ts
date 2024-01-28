import * as vscode from 'vscode';

/**
 * if true many logs are generated and sent to the console
 */
export const $$debugging = false;

/**
 * Name of the key within the configuration file to look
 * for certain values.
 *
 * !!! If it is changed here it must also be changed !!!
 * !!! in the `package.json` file, into the key      !!!
 * !!! `contributes.configuration.properties`        !!!
 */
export const configKey = 'sampwdgenerator';

/**
 * Takes a string representing a `setting.json => sampwdgenerator
 * key and returns the value for that key. The `sampwdgenerator`
 * part of the key is hardcoded into the method
 *
 * @param {string} key
 * @returns {string | number | undefined}
 */
export const getConfigValueAtKey = (
  key: string
): string | number | undefined => {
  const value: string | number | undefined = vscode.workspace
    .getConfiguration(configKey)
    .get(key);

  if ($$debugging) {
    console.log('§> getConfigValueAtKey', { value });
  }

  return value;
};

// End of file globals.ts
