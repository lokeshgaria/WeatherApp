const cityName = document.getElementById('cityname');
const cityOutput = document.getElementById('city_name');
const submitId = document.getElementById('submitBtn');
const temp = document.getElementById('temp');
const tempStatus = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');




const getinfo = async (event) => {
    event.preventDefault();
    let cityValue = cityName.value;
    if (cityValue === "") {
        cityOutput.innerText = "plz enter city name first ";
        datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=6276b07c735aba3aeed00e299b12b044`;
            const response = await fetch(url);
            const data = await response.json();
            
            const arrdata = [data];
            
            let tempround = arrdata[0].main.temp;
            temp.innerText = Math.round(tempround) + "º" + " C";
             
            cityOutput.innerText = `${arrdata[0].name} , ${arrdata[0].sys.country}`;
             
            let tempMood = arrdata[0].weather[0].main;
            if (tempMood=="Clear") {
                tempStatus.innerHTML='<i class="fas fa-sun" style="color :#eccc68; "></i>';
            }else if(tempMood == "Rain"){
                tempStatus.innerHTML = '<i class="fas fa-cloud-rain" style="color :  #a4b0be;"></i>';
            }
            else if(tempMood == "Clouds"){
                tempStatus.innerHTML = '<i class="fa fa-cloud" aria-hidden="true" style="color: #f1f2f6;"></i>';
            }

            else{
                tempStatus.innerHTML = '<i class="fa fa-cloud" aria-hidden="true" style="color: #f1;"></i>';
            }
            datahide.classList.remove('data_hide');

        }
        catch {
            cityOutput.innerText = ` enter city name Properly`;
            datahide.classList.add('data_hidden');
        }

    }

}
submitId.addEventListener('click', getinfo);