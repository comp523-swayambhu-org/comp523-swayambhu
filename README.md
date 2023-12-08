# comp523-swayambhu
# Project Description
“Swayambhu Stories” is an innovative endeavor born from the collaboration between Professor Lauren Leve of UNC’s Religious Studies department and Baakhan Nyane Waa, a Nepali NGO comprised of cultural heritage enthusiasts and experts. This project addresses the pressing need to preserve the tangible and intangible heritage of Nepal, especially considering its vulnerability to earthquakes and the rapid pace of cultural change.

# Import Necessary Files
Before you can run this app, you must download the necessary unity files, which are too big for github. Add them to your local device by downloading them from this google drive folder: https://drive.google.com/drive/folders/1wU3rmkipwTaMVIFkOYj43t7WdZHx09U-?usp=drive_link. These files should go under the `public/build` folder, which contains all the unity files.

# How to Run This App
If you would like to run this app locally, simply run `npm run start` in the terminal of the base directory. 

# Editing the Model In Unity
To edit the Unity project, go to the google drive folder linked here: https://drive.google.com/drive/folders/1wU3rmkipwTaMVIFkOYj43t7WdZHx09U-?usp=drive_link and download the zip file called `OctDemo.zip`. You can then unpack the zip and open the folder in the Unity Editor and select the folder like so:
<img width="754" alt="Screenshot 2023-11-19 at 3 25 13 PM" src="https://github.com/charlesma11/comp523-swayambhu/assets/73028566/a85ebb41-cd15-4006-b37c-ca9b8e71d5cf">

Once open, you can edit the project like you would any other Unity project.

# Deployment
To deploy this app, make a commit to main and a new build should start in cloud apps. To acccess the files from google drive, you must `rsync` the unity files into the `public/build` folder on the deployment. To do so, `cd` into the directory where the unity build folder is on your computer, and run `oc rsync build comp523-swayambhu-final-2-65985696f4-4klcr:/opt/app-root/src/public/ --progress`. Once the files have transferred over, the app will be deployed. Note: due to the size of the model, depending on how much CPU is allocated to the pod, the unity model can take a few minutes to render in the browser.

# Other Notes
If would like to bypass the process of downloading from google drive and this project remains active with many commits to the large unity files, I would highly recommend using git lfs and paying for a monthly subscription. This method would allow you to commit and deploy as needed without have the external storage system.
