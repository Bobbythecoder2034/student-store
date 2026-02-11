const mongoose = require('mongoose');
const fileSchema = new mongoose.Schema({
    filename: String,
    contentType: String,
    data: Buffer // Store the file data as a Buffer
});
const FileModel = mongoose.model('File', fileSchema);

export default FileModel;