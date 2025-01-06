# Simple File Uploader

A simple REST API to upload and store files locally.

## Features
- Upload files to a local directory.
- Supports file size limits and type validation.
- Serve uploaded files via a static endpoint.

## Endpoints

### Upload File
- **POST** `/upload`
- **Body**: Form-Data (Key: `file`, Value: File)
- **Response**:
  ```json
  {
    "message": "File uploaded successfully",
    "filePath": "uploads/unique-file-name.jpg"
  }
  ```

### Serve Uploaded Files
- **GET** `/uploads/:filename`
- Use the `/uploads` route to access files by their filenames.

### Example API Testing

#### 1. Upload a File
- **Endpoint**: `POST /upload`
- **Request Body**: Form-Data
  - Key: `file`
  - Value: Upload any file (e.g., `example.png`)
- **Response**:
  ```json
  {
    "message": "File uploaded successfully",
    "filePath": "uploads/1672509397658-example.png"
  }
  ```

#### 2. Access Uploaded File
- **Endpoint**: `GET /uploads/1672509397658-example.png`
- **Response**: The uploaded file is downloaded or displayed in the browser.

#### 3. Upload Validation Error
- **Endpoint**: `POST /upload`
- **Request Body**: Upload a file exceeding 5MB or with an invalid type.
- **Response**:
  ```json
  {
    "error": "Invalid file type"
  }
  ```

## Running the App
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Access the API at `http://localhost:3000/upload`.

## Learnings
- Using Multer middleware for handling file uploads.
- Serving static files with Express.
- Applying file validation and size limits.