# Top Stories

![Printing NYT Newspapers](https://media.giphy.com/media/5b9iSaucUKpukkTQpG/giphy.gif)

__Synopsis__

A visually forward web app for browsing the top NYT stories of the day

__User Capabilities__
- User can click on any topic of their choice and observe a visual grid of articles relating to that topic
- User can utilize the search bar to query articles by various keywords such as title, people, and location
- User hover over any image to see the article title fade in
- User can click on any image to be taken to the 'detailed' view of their article of choice
- User can utilize the two buttons at the bottom of the 'detailed' view to:
  - Open the article on NYT
  - Return to their topic section of choice 

## Technologies Used

- React.js (bootstrapped with create-react-app)
  - React Router
  - Hooks

- JSX / HTML
- JavaScript ECMA6
- CSS3

## Challenges

__Implementing React Router__
- Ensuring that the <code>/</code> path hits the 'home' endpoint
- No additional calls are being made upon render of the ArticleDetails component
  - Which limits the capabilities of the useHistory and useMatchPath hooks

__First time working with a process.env variable__
- Though not difficult to implement, took some additional research to understand how create-react-app compiles

## Next Iterations

__Responsiveness__
  - Getting breakpoints down to mobile screen widths of 320px would be the next goal
  - Apply alt text to ArticleCard images

__Testing__
  - Testing is likely at 25 - 30 % coverage at the time of writing this README
  - Ensuring that stubbing is working properly will be essential to continuing the E2E testing process

__Styling__
  - Element transitions at present are very sharp due to lack of easing
  
