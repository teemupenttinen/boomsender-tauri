use serde::{Deserialize, Serialize};
use std::{io::Write, net::TcpStream};
use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

#[derive(Serialize, Deserialize)]
struct Device<'a> {
    id: i32,
    name: &'a str,
    ip: &'a str,
    port: u16,
}

#[tauri::command]
fn send_command(ip_address: &str, port: u16, command: &str) {
    let address = format!("{ip}:{port}", ip = ip_address, port = port);
    let mut stream = TcpStream::connect(address).unwrap();
    stream.write(command.as_bytes()).unwrap();
}

#[tauri::command]
fn get_devices() -> [Device<'static>; 2] {
    let device = [
        Device {
            id: 1,
            name: "Projector",
            ip: "127.0.0.1",
            port: 9000,
        },
        Device {
            id: 2,
            name: "TV",
            ip: "127.0.0.1",
            port: 9000,
        },
    ];
    return device;
}

fn main() {
    let close = CustomMenuItem::new("close".to_string(), "Close");
    let submenu = Submenu::new("File", Menu::new().add_item(close));
    let menu = Menu::new()
        .add_native_item(MenuItem::Copy)
        .add_item(CustomMenuItem::new("hide", "Hide"))
        .add_submenu(submenu);
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![send_command])
        .invoke_handler(tauri::generate_handler![get_devices])
        .menu(menu)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
