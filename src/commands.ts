import { invoke } from '@tauri-apps/api/tauri'

import { Device } from './models'

export const saveDevices = async (devices: Device[]) => {
  await invoke('saveDevices', { devices })
}

export const getDevices = async () => {
  const devices = await invoke<Device[]>('get_devices')
  console.log(devices)
  return devices
}

export const sendCommand = async (ipAddress: string, port: number, command: string) => {
  await invoke('send_command', { ipAddress, port, command })
}
