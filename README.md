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


###Q2 -- Site Performance Issue
####"We are noticing that our page is loading slowly. We have 50 high-resolution images loading in the Olapic carousel and we'd like to speed it up!".

**A2**:




**Rationale/Sources:**

###Q3 -- Customization Request
####"Unless Olapic JS widgets support IE8, it looks like we may have to take our business elsewhere. What can you do to make this happen?"

*Note: Olapic widgets only support IE9+ and modern browsers. Olapic API is often used as an alternative to Olapic JS widgets.*

**A3**:






**Rationale/Sources**:


###Q4 -- Unhappy Customer
####"Our widgets are down! You sent us an email saying our new API key is ready and now we're getting a message saying API key expired!"

Note: Due to a bug on our side, the API key that was generated for them was expired at the time they received it. The new API key is now ready
for them to access in their Olapic account.


**A4:**


**Rationale/Sources:**


---------------------------------------------------------------------------------------

Solutions Architect: Product Feed Validation

One aspect of the Olapic integration is for the client's Product Feed to be validated to confirm it can be imported into their Olapic account
successfully.

Task
Below, in the Appendix, we have provided an initial version of a feed file that has been delivered by a client. The task is to run a validation test on
the file in order to 1) identify any errors and 2) propose fixes for those errors to be resolved.

Note:
Our validation tool can be found here: http://developer.olapic.com/articles/product-feed-full-public.html#validating-your-feed


Issues Caught & Suggested Fixes:

