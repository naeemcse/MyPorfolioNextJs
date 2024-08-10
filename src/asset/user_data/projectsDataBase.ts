
// When i add new project ,then just i will update this asset's file
/*
* "video" link will be from embaded iframe link only , other link will faild to show
* */

export type projectsType = {
    id: number;
    title: string;
    subtitle?: string;
    body?: string;
    listItem?: string[];
    technologies?: string;
    video?: string;
    lastLine?: string;
    github?: string;
    liveLink?: string;
    createdAt: string;
    image: string;
    image2?: string;
    detailsLink?: string;
    category?: string;
}
export  const projects:projectsType[] = [
    {
        id:1,
        title:"MERN Real Time Chat App",
        body:" This is a full-stack Mern Project where user can chat with each other in real-time. User can create a room and join the room to chat with other",
        listItem:["One to One chat","Real-time chat","Create Group Chat","Join Group Chat","Leave Group Chat","Delete Group Chat"],
        technologies:"React, Node, Express, MongoDB, Socket.io",
        createdAt:"2024-05-10",
        image:"/asset/images/web_app_cover.png",
        video:"https://www.youtube.com/embed/-7MfHCCIRVs?si=rKDsYuU7DPdsGrD2",
        github:"https://github.com/naeemcse/mern-chat-app",
        detailsLink:"/project/details/?id=1",
        category:"Web Application"
    }, {
        id:2,
        title:"React E-Commerce",
        body:"This is a full-stack Mern Project where user can buy products online. User can add products to the cart and checkout the products",
        listItem:["Add to Cart","Remove from Cart","Checkout Products","Payment Gateway","User Authentication"],
        technologies:"React, Node, Express, MongoDB, Stripe",
        createdAt:"2024-05-10",
        image:"/asset/images/projects/portfolio_mockup.png",
        video:"https://youtu.be/43MwaiJPVW0",
        github:"https://github.com/naeemcse/MyPorfolioNextJs",
        category:"Web Application"
    },
    {
        id:3,
        title:"Full-Stack Portfolio with Blog",
        body:"This is a full-stack NextJs Project where user can create a portfolio and write a blog. User can create, update, delete a portfolio and blog",
        listItem:["Create Portfolio","Update Portfolio","Delete Portfolio","Create Blog","Update Blog","Delete Blog"],
        technologies:"NextJs, Node, Express, MongoDB",
        createdAt:"2024-01-10",
        image:"/asset/images/projects/portfolio_mockup.png",
        video:"https://www.youtube.com/embed/-7MfHCCIRVs?si=E5wnbsCTlXJJdRVb",
        liveLink:"https://naeemjs.vercel.app/",
        github:"",
        category:"Web Application"
    },
    {
        id:4,
        title:"SkillMap",
        body:"This is  full Stack project to find location based Professinals Hunter .",
        listItem:["Winner First Price in NSTU at Project Showcase"],
        technologies:"NextJs, Node, Express, MongoDB",
        createdAt:"2024-01-10",
        image:"/asset/images/projects/SkillMap Mockup.png",
        // video:"https://www.youtube.com/embed/-7MfHCCIRVs?si=E5wnbsCTlXJJdRVb",
        liveLink:"https://naeemjs.vercel.app/",
        github:"",
        category:"Web Application"

    },
    {
        id:5,
        title:"Video Sharing Platform",
        body:"This is a android and IOS app for sharing video like youtube",
        listItem:["Mobile Application"],
        technologies:"React Native ,Expo,Appwrite",
        createdAt:"2024-07-10",
        image:"/asset/images/projects/mobile_symbol.jpg",
        // video:"https://www.youtube.com/embed/-7MfHCCIRVs?si=E5wnbsCTlXJJdRVb",
      //  liveLink:"https://naeemjs.vercel.app/",
        github:"https://github.com/naeemcse/first-react-native-app",
        category:"Mobile Application"

    }
]