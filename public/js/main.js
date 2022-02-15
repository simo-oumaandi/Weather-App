const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const submitBtn= document.getElementById('submitBtn');

const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
const data_hide=document.querySelector('.middle_layer');
const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal ===""){
        city_name.innerText =`قم بادخال اسم المدينة`;
    data_hide.classList.add('data_hide');
    }
    else{
        try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=68cef33e0cd7fa77f8b5e1c02a81f432`;
        const response= await fetch(url);
        const data=await response.json();
        const arrData=[data];
        city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText=arrData[0].main.temp;
        const tempMood=arrData[0].weather[0].main;
        if(tempMood=="Clear"){
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }
        else if(tempMood=="Clouds"){
            temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
        }
        else if(tempMood=="Rain"){
            temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
        }
        else if(tempMood=="Haze"){
            temp_status.innerHTML="<i class='fas fa-smog' style='color:#f1f2f6;'></i>";
        }
        else{
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
        } 
        data_hide.classList.remove('data_hide')
        }
        catch{
            city_name.innerText =`الرجاء إدخال اسم المدينة بشكل صحيح.`;
            data_hide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click',getInfo);