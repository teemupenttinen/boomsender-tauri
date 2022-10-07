import { BaseDirectory, createDir, readTextFile, writeTextFile } from '@tauri-apps/api/fs'

import { Device } from './models'

export const saveDevices = async (devices: Device[]) => {
  try {
    await writeTextFile('devices.json', JSON.stringify(devices), { dir: BaseDirectory.App })
  } catch (err) {
    await createDir('', { dir: BaseDirectory.App })
    console.log(err)
  }
}

export const readDevices = async () => {
  try {
    const devices = await readTextFile('devices.json', { dir: BaseDirectory.App })
    return JSON.parse(devices)
  } catch (err) {
    console.log(err)
  }
}
