# Deploy readme

1. Choose NPM or YARN, not both. Install (yarn install or npm install)

2. Add to gitignore file (".DS_Store" and all "Node" stuff)

3. Test the App locally

4. git add .

5. git commit -m "Some message"

6. git push

7. heroku create

8. git push heroku master

9. "Solve for issues..."

    - If there is both a yarn.lock and package-lock.json, remove one of the files.

    - If it says "module not found", redo the install of the module so that the dependencies show in package.json. The other thing to check is if your imports are correctly staying inside the repo. Make the folder are relative to the repo folder.

    - heroku tail will help with database issues and the other hard things to check on

10. Go to heroku

11. Find the app and click on it

12. Click Configure Add-on

13. Click on search and type "jawsdb mysql"

14. Choose free version (must use CC to deploy - still free)

15. Choose Provision and it should be added.

16. Check the JAWSDB_URL Config Vars (Settings > Reveal Config Vars);

17. Go back to add-ons (Resources > Overview)

18. Click on the link to get database information

19. Update the project to use the Jawsdb info.

20. (re-deploy)

21. Test again (use `heroku logs --tail` to confirm)