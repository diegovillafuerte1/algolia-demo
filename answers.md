```
Question 1:
Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:
- Records
- Indexing

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking." 

Cheers,
George
```
Hi George,

Custom ranking can be confusing, but a good rule of thumb would be to look for a pattern that you think would make a particular record more valuable than another. An example of this from our documentation is the ``number_of_likes`` attribute.

```
You’ve recently offered your users the ability to like your items, which include music, films, and blog posts. You’ve gathered “likes” data, and you’d like to use this information to sort your search results.
```

After storing this ``number_of_likes`` information we could reason that the more likes something has, the more likely it is to sell and use that assumption to rank items with a high ``number_of_likes`` at the top of the search results.

# Records

At a high level, records are just the objects your search will be searching through. More specifically a record is an accumulation of attributes that make up a piece of data--for instance in this wine dataset we have attributes like name, price, year and type of wine.

When we search through things, we're just looking for a match between the values in our record's attributes and our search string.

```
Search String: 
"2012 Red Wine"
```

```
Records:
{year:2012, type:red, name:Pauillac}
{year:2010, type:red, name:Pomerol}
```

With something like this we'd expect our search to match only one of those two records.

# Indexing

The important thing to understand about indexing is that our goal is to make a fast and smooth user experience--indexing our data is one of the main ways we do that.

When we're indexing we're guessing which of our record's attributes is the most likely to be valuable when a user searches (and prioritizing searching that attribute). For instance, if the majority of user searches include the year of the wine being searched for, you're going to want those searches to be the fastest and so we'll search the year attribute of our data first for matches. 
```
Search string: 
"2020"
```
```
Records
{name, quality, region, type, year}
Has to go through 5 different attributes to find a match
{year, name, quality, region, type}
Only has to go through a single attribute to find a match
```

Indexing is more than this, but if we imagine indexing as reordering our data then it's obvious why we can't just index everything as well--you wouldn't be able to set each attribute as equally important and see any change.

Best,

Diego
```
Question 2:
Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards,
Matt
```
Hi Matt,

Thank you so much for your feedback! We recognize that extra clicks are always difficult for advanced/heavy users to work with--so we like to recommend using our API for these tasks.

https://www.algolia.com/doc/guides/sending-and-managing-data/manage-your-indices/how-to/delete-multiple-indices/#delete-an-index-using-the-api

Please let me know if you need any help using out API!

In addition, I'm sure our UX/UI team would love to hear your opinions in our future UX/UI A/B testing. Would you be interested in giving feedback on future UX/UI changes?

Best,

Diego

```
Question 3:
Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards,
Leo
```

Hi Leo,

To ease the integration Algolia provides:

- A full-featured dashboard to manage data and configurations.
API clients for 11 languages (PHP, Ruby, JavaScript, Python, iOS, Android, C#, Java, Golang, Scala and Kotlin).
- A set of front-end libraries called InstantSearch to implement Algolia on your website (vanilla JavaScript, React, Vue, Angular) or mobile application (iOS, Android), as well as an Autocomplete library to build autocomplete experiences.
- Integrations for frameworks, including Laravel, Symfony, Django and Rails.
- Extensions for Magento 2, Shopify, Salesforce Commerce Cloud, WordPress, Zendesk, Jekyll, and Netlify.
- An automated crawler to extract content from multiple sites and send it to Algolia.

I'd love to hear more about your tech stack and requirements--We could set up a call and I'd be able to guide you a bit more on exactly what it would look like for your website specifcally.

We have some great resources for understanding what it would take to get Algolia up and running here as well:

https://www.algolia.com/doc/guides/getting-started/quick-start/

Best,

Diego