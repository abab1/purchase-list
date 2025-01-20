# Demo link
https://abab1.github.io/purchase-list/

# Steps to install and run
- Make sure node and npm is installed
- Clone the repo
- execute npm i to install
- execute npm run dev to start dev server. This will display the url that can be used to test locally
- execute npm run test to run tests

# Tech Stack
- Vite
- React
- TypeScript

# Approach
I opted to create separate components for the mobile and desktop versions of the Purchase list due to their distinct layout requirements. The desktop layout is organized as tabular data for efficient scanning of data, while the mobile view uses cards for more touch-friendly behavior. This separation also provides flexibility for future enhancements - such as potentially adding pagination to the table view or infinite scrolling for the card layout. Maintaining these as independent components makes it easier to implement such features while keeping the code organized and maintainable.

## 

# Enhancements
- Pagination for Desktop view
- Infinity list for Mobile view
- pinner/Skeleton component for loading state
- Error screen for error state
- Actions on purchase items



# Screenshots

## Desktop
![image](https://github.com/user-attachments/assets/1f3dc8e3-41b8-4fd6-99fe-f33f8c750f11)

## Mobile
![image](https://github.com/user-attachments/assets/8f5942ac-e4f6-481c-bfc0-446e2cabff53)

