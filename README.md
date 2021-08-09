# Cornerstone Theme Test

URL: https://obundle-project-store.mybigcommerce.com/?ctk=688970b3-a98e-4381-a777-51bf14d67873
Preview Code: ne5f5lxepz

I was able to complete all of the tasks assigned for this project by utilizing a combination of the bigcommerce community forums and the developer documentation mentioned in the assignment. I will describe how I solved each problem below.

# Showing second product image on hover

For this problem, I decided after looking through some forum posts that I would use getImage to get the image source and place it in the src tag. After this, I created a data-src tag with the first image as it's value, as well as a tag called data-hoverimage that would store the value of the second product image. Then, using a jquery hover event, I swapped the values of the src tag and the data-hoverimage tag on the <img> element in question, allowing the image to change when hovering over the product. After leaving hover, the data-src tag and the new src tag values were swapped in order to switch the image back.

# Add all to Cart

For this, I created a new component in the templates/components/category folder called add-all-to-cart.html. In this file, I created a button using the same styling as the "subscribe button seen in the footer. Then I created a script for a jquery on click event. When the button is clicked, the products on the category page are taken from jsContext and placed in a variable called products. That products variable is iterated over, and the product id of each product is used to make a request to the storefront api to add the product to the customer's cart, until all items in that category have been added to cart. Afterwards, the customer is redirected to their cart.

# Remove all from Cart

For this problem, I found that I had to write this within the product-listing.html template because I needed to add the button to the DOM dynamically if the user had an item in their cart. My solution was to use jquery to append a handlebars script containing the button to a div that was right next to the Add All to Cart button. I originally had wanted to append a raw html file and keep this button in it's own template, however when I used jquery's $.get() selector to request the file, it kept adding "/special-items/" to the front of the url for the file. I was unable to figure out why this was happening, so I opted to write the button within the product-listing.html template instead.

First I used the storefront api to make a call to /api/storefront/cart in order to get the data for the user's cart. Once I had the data, I checked the length of the cart array, which I found to be an empty array if the cart had no items. If cart.length was greater than 0, that is when I would compile the handlebars script to a variable and apprend it to the DOM to be rendered. On click, the button would use jsContext to grab the user's cart id so it could be used to delete items from the cart. Then, I iterated over the lineItems object that was in the cart data. This object had 5 different arrays of item categories as its values, so I iterated over this object checking the length of each of these arrays. If the length was > 0, I would iterate over that specific array to pull out any item ids, and use them in combination with the cart id from earlier to delete that item from the customer's cart. Afterwards, I would redirect the user to the cart page. Originally I had just been deleting the customer's cart as a whole, but was encountering some issues with changing cart ids, so I opted to go this route instead.

# Bonus: Displaying user data in NavBar

To solve this, I simply added a few more list items at the beginning of templates/components/common/navigation.html just like the ones for the Search, Account, Sign Out, and Cart buttons, and pulled the data from the Customer object for the customer's name, email, and phone number to be their values. I changed these from <button> elements to <p> elements, and created some new CSS rules that kept them looking the same as the other list items, but without the hover effect so it was clear that they were not interactive to the user.

# Issues

Currently, adding all to cart and removing all from cart behaves a bit strangely. Sometimes it takes a while for the cart to actually update, and the timing seems kind of inconsistent. The redirect to the cart page doesn't seem to line up with when the data actually is changed on the backend, so sometimes you will be redirected and it will look as if the button didn't work, however refreshing the page usually will cause the changes in data to be reflected if this happens. I was unable to figure out why this was happening but decided to press on with the rest of the work, as the core functionality was working even if it might have been a bit buggy.