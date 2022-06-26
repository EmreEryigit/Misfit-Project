

exports.getIndexPage = async(req,res) => {
    res.render("index", {
        page_name: "index"
    })
}
exports.getAboutPage = async(req,res) => {
    res.render("about", {
        page_name: "about"
    })
}
exports.getContactPage = async(req,res) => {
    res.render("contact", {
        page_name: "contact"
    })
}
exports.getGalleryPage = async(req,res) => {
    res.render("gallery", {
        page_name: "gallery"
    })
}
exports.getTrainerPage = async(req,res) => {
    res.render("trainer", {
        page_name: "trainer"
    })
}