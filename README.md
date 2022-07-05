# lwc-test-task
 
### Goals

- Demonstrate general understanding of Lightning Web Component (LWC) development.

- Retrieve a stock price using a public API (i.e. Yahoo Finance).

### Requirements

- The component must be able to accept user input, namely a stock ticker/symbol (i.e. AAPL).

- Using a public API (i.e. Yahoo Finance), retrieve the current stock price and display result to the user.

- Develop two components, one will be the parent/container, the other will be the child.

- Demonstrate that you know how to pass data between components.

- Document your code.

### Solution

1. created parent component **stockApp**, which contains 3 files
![](/assets/parentComponent.png)

2. created child component which contains 3 files
![](/assets/childComponent.png)

3. pushed all components to my default org using command **Push Source to the Scratch Org**

4. in salesforce created new App Page and called it **Stock App Page**
![](/assets/StockAppPage.png)

5. added to the page parent component
![](/assets/AddingComponent.png)

6. from App launcer open the page
![](/assets/AppLauncher.png)

7. to get data from external api need to add api to **Retrieve Site Settings**
![](/assets/RemoteSiteSettings.png)

8. and to **Content Security Policy Trusted Sites**
![](/assets/CSPTrustedSites.png)

9. now we can try to get stock details

- test 1
![](/assets/test1.png)

- test 2
![](/assets/test2.png)

- test 3
![](/assets/test3.png)