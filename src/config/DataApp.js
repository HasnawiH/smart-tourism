import ConfigApp from "./ConfigApp";
import AsyncStorage from '@react-native-async-storage/async-storage';

////////////////////////////////// API

export async function getFeaturedPlaces(){
  try {
    const url = `${ConfigApp.URL}json/data_places.php?featured=Yes`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getLatestPlaces(){
  try {
    const url = `${ConfigApp.URL}json/data_places.php?limit=8`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getLatestOffers(){
  try {
    const url = `${ConfigApp.URL}json/data_offers.php?limit=8`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getPlaceCategories(page){
  try {
    const url = `${ConfigApp.URL}json/data_places_categories.php?page=${page}`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getPlaceTypesByCategory(category){
  try {
    const url = `${ConfigApp.URL}json/data_places_types.php?category=${category}`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getFeaturedOffers(){
  try {
    const url = `${ConfigApp.URL}json/data_offers.php?featured=Yes&limit=10`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getOffersCategories(){
  try {
    const url = `${ConfigApp.URL}json/data_offers_categories.php?`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getNewsCategories(){
  try {
    const url = `${ConfigApp.URL}json/data_news_categories.php?`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getLatestNews(){
  try {
    const url = `${ConfigApp.URL}json/data_news.php?limit=5`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getNewsByCategory(id, page){

    const url = id ? `${ConfigApp.URL}json/data_news.php?category=${id}&page=${page}&limit=8&order=desc` : `${ConfigApp.URL}json/data_news.php?page=${page}&limit=8&order=desc`;

  try {

    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getOrders(token){
  try {
    const url = `${ConfigApp.URL}json/data_orders.php?token=${token}`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getOfferById(id){
  try {
    const url = `${ConfigApp.URL}json/data_offers.php?id=${id}&limit=1`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getPlaceById(id){
  try {
    const url = `${ConfigApp.URL}json/data_places.php?id=${id}&limit=1`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getNewsById(id){
  try {
    const url = `${ConfigApp.URL}json/data_news.php?id=${id}&limit=1`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getPlaceByCategory(id, page){
  try {
    const url = `${ConfigApp.URL}json/data_places.php?category=${id}&page=${page}&limit=8&order=desc`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getPlaceByType(id, page){
  try {
    const url = `${ConfigApp.URL}json/data_places.php?type=${id}&page=${page}&limit=8&order=desc`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getOfferByCategory(id, page){
  try {
    const url = `${ConfigApp.URL}json/data_offers.php?category=${id}&page=${page}&limit=8&order=desc`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function searchItems(query, page){
  try {
    const url = `${ConfigApp.URL}json/data_search.php?query=${query}&page=${page}&limit=8`;
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    //console.error(error);
  }
}

export async function getStrings(){

  const url = `${ConfigApp.URL}json/data_strings.php`;
  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    
  }
}

export const contactForm = async (name, email, message) => {

  const url = `${ConfigApp.URL}json/contact_form.php`;

    try {

        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_name: name,
                user_email: email,
                user_message: message
            })
        })
        const json = await resp.json();
        return json;
    
    }catch (e) {

          // console.log('Error...', e.message);

      }
}

////////////////////////////////// Favorites

export const setPlaceBookmark = async (item) => {

  try {

    await AsyncStorage.getItem('placesFav').then(response => {
  
      const res = JSON.parse(response);
  
      if (res !== null) {
        let data = res.find(e => e.id === res.id);
        if (data == null) {
          res.push(item);
          AsyncStorage.setItem('placesFav', JSON.stringify(res));
        }
      } else {
        let data = [];
        data.push(item);
        AsyncStorage.setItem('placesFav', JSON.stringify(data));
  
      }
  
    });
  
      return true;
  
    } catch (error) {
      //console.log("Error", error);
    }

}

export const removePlaceBookmark = async (id) => {

  try {

     const data = await AsyncStorage.getItem('placesFav').then(token => {
     const res = JSON.parse(token);
     return res.filter(e => e.id !== id);

  });

   await AsyncStorage.setItem('placesFav', JSON.stringify(data));
   return true;
   
  } catch (error) {
    //console.log("Error", error);
  }

}

export const getFavPlaces = async () => {

  try {
      let items = await AsyncStorage.getItem("placesFav");
      let data = JSON.parse(items);
      return data;
  } catch (error) {
    //console.log("Error", error);
  }
}

export const setOfferBookmark = async (item) => {

  try {

    await AsyncStorage.getItem('offersFav').then(response => {
  
      const res = JSON.parse(response);
  
      if (res !== null) {
        let data = res.find(e => e.id === res.id);
        if (data == null) {
          res.push(item);
          AsyncStorage.setItem('offersFav', JSON.stringify(res));
        }
      } else {
        let data = [];
        data.push(item);
        AsyncStorage.setItem('offersFav', JSON.stringify(data));
  
      }
  
    });
  
      return true;
  
    } catch (error) {
      //console.log("Error", error);
    }

}

export const removeOfferBookmark = async (id) => {

  try {

     const data = await AsyncStorage.getItem('offersFav').then(token => {
     const res = JSON.parse(token);
     return res.filter(e => e.id !== id);

  });

   await AsyncStorage.setItem('offersFav', JSON.stringify(data));
   return true;
   
  } catch (error) {
    //console.log("Error", error);
  }

}

export const getFavOffers = async () => {

  try {
      let items = await AsyncStorage.getItem("offersFav");
      let data = JSON.parse(items);
      return data;
  } catch (error) {
    //console.log("Error", error);
  }
}