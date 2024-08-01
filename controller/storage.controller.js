const uploadFile = (req, res) => {
    // console.log(req.file);
    const {destination, filename} = req.file;
    const path = destination+filename;
    // console.log(path);
    res.json({
        success : true,
        path: path,
        filename: filename
    })
}

module.exports = uploadFile
