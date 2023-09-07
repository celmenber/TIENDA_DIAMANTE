import { CleanHands, FoodBank, HdrStrongOutlined, Pets, Piano, SipRounded, SpaRounded, Sports } from "@mui/icons-material";


const productCategoryConfig = {
    categoria1:{title:"categoria1", icon: <Pets sx={{ marginRight : 1}}/>, color:"secondary"},
    categoria2:{title:"categoria2", icon: <CleanHands  sx={{ marginRight : 1}}/>, color:"error"},
    categoria3:{title:"categoria4", icon: <FoodBank  sx={{ marginRight : 1}}/>, color:"success"},
    categoria4:{title:"categoria5", icon: <Piano  sx={{ marginRight : 1}}/>, color:"info"},
    categoria5:{title:"categoria6", icon: <SipRounded  sx={{ marginRight : 1}}/>, color:"warning"},
    categoria6:{title:"categoria7", icon: <HdrStrongOutlined  sx={{ marginRight : 1}}/>, color:"secondary"},
    categoria7:{title:"categoria8", icon: <SpaRounded  sx={{ marginRight : 1}}/>, color:"secondary"},
}

export default productCategoryConfig;