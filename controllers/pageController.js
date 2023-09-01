
let data = [
    {
        postTitle:"Glaksi",
        postSubTitle:"",
        image:"https://images.unsplash.com/photo-1692394434977-f3f83967b3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=868&q=80"
    },
    {
        postTitle:"Dağ",
        postSubTitle:"",
        image:"https://images.unsplash.com/photo-1682685794761-c8e7b2347702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        postTitle:"Manzara",
        postSubTitle:"",
        image:"https://plus.unsplash.com/premium_photo-1674582279349-901af56ed59b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1379&q=80"
    },

]

exports.getIndexPage = async(req,res) => {
    res.status(200).render('index',{data : data});
}


exports.getAboutPage = async(req,res)=>{
    res.status(200).render('about');
}

exports.getContactPage = async(req,res)=>{
    res.status(200).render('contact');
}

exports.getResumePage = async(req,res)=>{
    res.status(200).render('resume');
}

exports.getSigninPage = async(req,res)=>{
    res.status(200).render('admin/signin');
}

exports.getSignupPage = async(req,res)=>{
    res.status(200).render('admin/signup');
}
