export const getdata = async () => {
    try {
        const response = await fetch("/ro.json");
        return await response.json(); 
    } catch (error) {
        console.log(error,'未抓取到資料');
        
    }
}

