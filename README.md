
### Instructions ###
- Clone the repo
- Change directory into client folder
- Ensure you're running Node 8 or greater - you can run `nvm install node` to grab the latest version
- Run `npm install` and allow packages to be installed
- Run `npm start` to get images running on a local server.

---------------------------------------------------
### Explanation of Logic. ###

I completed the project using Create React App's basic architecture and Redux for state management. I used the axios library to grab the most recent images from Olapic's media endpoint and then load them into the store. I created a Container component that would load the images from the store using the `connect` feature of the Redux-Thunk library and then passed them onto a presentational component that displayed them. 

To render the images in the format of the 1 big image vs. 4 smaller images, I used CSS grid feature to create two big columns. Then, in the second column, I created a second set of columns that would each house of the smaller images. I first defined the properties of the height and width of the large image. Then, I ratioed the smaller image to be roughly a quarter of the large image.

The presentational component mapped through the images that it was fed and passed the first one to the left column and the subsequent ones to the right column.


---------------------------------------------------
### Q1 -- Integration Inquiry ###

#### "Is there an Olapic integration with Demandware? We are in the process of moving to Demandware; if we decided to use Demandware, how would we go about doing that?" ####

**A1**:
```
Hi *name*,

Yes, we do have Olapic integration with Demandware, and it can be downloaded from Salesforce Commerce Cloud. The integration has features like Widget Management and the Product Feed, so it should be fairly similar. You can download the integration here (http://www.demandware.com/link-marketplace/olapic). There are also a few helpful resources available for you to review.

Let me know if you run into any issues or have further questions.

Thanks,
Paul

Rationale/Sources:
See the link below to Demandware
```

[Demandware](http://www.demandware.com/link-marketplace/olapic)


### Q2 -- Site Performance Issue ###
#### "We are noticing that our page is loading slowly. We have 50 high-resolution images loading in the Olapic carousel and we'd like to speed it up!". ####

**A2**:

```

Hi **name**,

There are a number of things we can try to get the load times lower including controlling the load sequence,
tweaking the image size, implementing load of images only within your viewpoint, and optimizing the number of photos.

Detailed instructions are available in our help documentation here:

http://developer.olapic.com/articles/widget-load-optimization-guide.html#use-appropriate-image-size


Let me know if you'd like assistance on implementing any of the above and I can certainly assist.

Thanks,
Paul

```
**Rationale/Sources:**
Depending on the issue after a deeper look into the customer's account, we may be able to implement some of the procedures here:
[Carousel Optimization](http://developer.olapic.com/articles/widget-load-optimization-guide.html#use-appropriate-image-size)


### Q3 -- Customization Request ###
#### "Unless Olapic JS widgets support IE8, it looks like we may have to take our business elsewhere. What can you do to make this happen?" ####

*Note: Olapic widgets only support IE9+ and modern browsers. Olapic API is often used as an alternative to Olapic JS widgets.*

**A3**:

```
Hey **name**,
I understand your frustration **name**, but currently, Olapic only supports IE9+ and other modern browsers. 

However, I'd urge you to take a look at JS widgets as an alternative. I've attached the documentation to get started below:

http://photorank.me/api.html

Let me know if you've an questions!

Thanks,
Paul
```
**Rationale/Sources**:
[Olapic API Docs](http://photorank.me/api.html)


### Q4 -- Unhappy Customer ####

#### "Our widgets are down! You sent us an email saying our new API key is ready and now we're getting a message saying API key expired!" ####

Note: Due to a bug on our side, the API key that was generated for them was expired at the time they received it. The new API key is now ready
for them to access in their Olapic account.


**A4:**
```
Hi **name**,

Sorry to hear that you're having technical difficulties currently.

Due to an issue on our side, the API key had expired at the time you had received it. However, this has now been fixed and you will be able to access your Olapic account with your new API key.

Apologies for your troubles.

Let me know if I can help any further.

Thanks,
Paul

```

**Rationale/Sources:**
Given that the issue has already been resolved, this is an exercise in being tactful. I apologized and explained the situation and suggested a new course of action. 

------------------------------------------------------------------------------------------------------------------------

Solutions Architect: Product Feed Validation

One aspect of the Olapic integration is for the client's Product Feed to be validated to confirm it can be imported into their Olapic account
successfully.

Task
Below, in the Appendix, we have provided an initial version of a feed file that has been delivered by a client. The task is to run a validation test on
the file in order to 1) identify any errors and 2) propose fixes for those errors to be resolved.

Note:
Our validation tool can be found here: http://developer.olapic.com/articles/product-feed-full-public.html#validating-your-feed


Issues Caught & Suggested Fixes:
```
Hi **name**,

Thanks for sending over the feed file. After running a validation test however, there were a couple of changes that needed to be made. They are listed below:

1) The <Name> tag on Line 78 does not has an '&' ampersand character. This is not allowed and the encoded symbol: '&amp;' should be used.
2) The <ProductUniqueID> tag cannot have any spaces between the enclosing tag. Thus, 'APTS-02 Blue' should be 'APTS-02Blue'

After these issues have been fixed, the file validates and the Product Feed can be created.

Let me know if you've any questions!

Thanks,
Paul Cherian
```






