const apiKey = 'eeCZsMRW8fvueYUdMHu171ULWvSPts0xdf8eiqSH6n9MEBIB2s5MdPahERDxdBuI451881TQEJfZ6icJ34Thj8plJZPi-tDBlT7qQRvBDP0R_yGIOuC5z7dHx6E2XXYx';
export const Yelp = {
    search: (term, location, sortBy) => {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {return response.json()})
        .then((jsonResponse) => {
            if (jsonResponse.businesses){
                return jsonResponse.businesses.map((businesses) => {
                    return {
                        id: businesses.id,
                        imageSrc: businesses.image_url,
                        name: businesses.name,
                        address: [businesses.location.address1, businesses.location.address2, businesses.location.address3],
                        city: businesses.location.city,
                        state: businesses.location.state,
                        zipCode: businesses.location.zip_code,
                        category: businesses.categories,
                        rating: businesses.rating,
                        reviewCount: businesses.review_count
                    }
                });
            }
        });
    }
};

