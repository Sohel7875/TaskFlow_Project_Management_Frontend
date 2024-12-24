const useGenerateData = () =>{  
        const today = new Date();
        const year = today.getFullYear();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[today.getMonth()];
        const day = today.getDate(); // Use `getDate` to get the day of the month (1-31)
        
        const formattedDate = `${day} ${month} ${year}`;
      
        




        return formattedDate
}

export default useGenerateData