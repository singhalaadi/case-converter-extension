# CASE-CONVERTER EXTENSION

## Introduction
CASE-CONVERTER is a Chrome extension that converts all lowercase letters on a webpage to uppercase and also back to its original form. It allows users to transform text on any webpage with a single click.

## Installation
1. Download or clone this repository.
2. Open **Google Chrome** and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right corner).
4. Click **Load unpacked** and select the project folder.
5. The extension will now appear in the Chrome toolbar.

## Usage
1. Navigate to any webpage.
2. Click the **CASE-CONVERTER** extension icon.
3. Click the **"Convert Text"** button.
4. Click the **Revert** button to change the converted text back.
5. All text on the page will be transformed into uppercase.

## Features
- Converts all lowercase text on a webpage to uppercase.
- Reverts the converted text back to original form on a webpage.
- Works on most websites (except Chrome system pages).
- Simple one-click transformation.

## Permissions
The extension requires the following permissions:
- **activeTab** – To access the currently open tab.
- **scripting** – To inject the script that modifies text on the page.

## Files and Structure
- **manifest.json** – Defines extension metadata and permissions.
- **popup.html** – UI structure with a button for conversion.
- **popup.js** – Handles button clicks and executes the script on the page.
- **icon.png** – Extension icon.

## Contributors
- **Aaditya Singhal** (Author)

## License
This project is licensed under the **MIT License**.
