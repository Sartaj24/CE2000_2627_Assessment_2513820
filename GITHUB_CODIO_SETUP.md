# GitHub + VS Code + Codio setup — beginner checklist

Follow the supplied `codioAndRepoSetup` document. The teaching guide says to make code changes in VS Code, push them to GitHub, then pull and test in Codio. Do not send passwords, personal access tokens or private SSH keys in chat.

## 1. Confirm the correct account and repository name

- Sign in to the student's own GitHub account in the browser.
- Check whether an assessment repository already exists. If it does, reuse it and preserve its files.
- The student confirmed that no repository has been created yet. The detailed setup guide explicitly uses the RGU student ID, so the proposed repository name for this student is `CE2000_2627_Assessment_2513820`. One duplicate guide contains a username-based example; if the lecturer gives a different explicit naming rule, follow that instruction. Do not guess or use another student's repository.
- Create the repository as **Private**, add a README and select the Node `.gitignore` template, as the guide states.
- Add `rmclean45` via **Settings → Collaborators** as specified by the guide. Complete the invitation flow if prompted.

## 2. Create the repository in GitHub (first-time setup)

Use the student's own account (`Sartaj24`). On GitHub, select **+ → New repository** and enter:

- Repository name: `CE2000_2627_Assessment_2513820`
- Description: `CE2000 Dynamic Web Technology assessment`
- Visibility: **Private**
- Add README: **Yes**
- Add `.gitignore`: **Node**

Select **Create repository**. Then open **Settings → Collaborators** and invite `rmclean45`, as required by the supplied guide. Follow any invitation/confirmation step on screen. Do not make the repository public. Do not add the supplied lab pack to an existing unrelated repository.

After creation, copy the repository's HTTPS URL and proceed below.

## 3. Clone locally in VS Code

- Use the repository's **Code → HTTPS** URL.
- In VS Code, open the Command Palette (`Ctrl+Shift+P` on Windows/Linux), choose **Git: Clone**, paste the HTTPS URL and choose a parent folder.
- Open the cloned repository and enable Workspace Trust.
- Copy the files from this lab pack into the repository only after checking for any existing files with the same names. Preserve existing assessment work.

## 4. Commit and push

Open Terminal → New Terminal in VS Code. Confirm you are inside the assessment repository:

```bash
git status
git branch --show-current
```

Review the Source Control diff before staging files. For a newly created empty assessment repository, stage the required lab project, commit it and push it:

```bash
git add .
git status
git commit -m "Add CE2000 web technology lab work"
git push
```

If the repository is not empty or Git reports a conflict, stop and inspect the status instead of blindly forcing a push.

## 5. Configure Codio's read-only SSH key

Open the assigned Codio workspace and its terminal. Run:

```bash
hostname
pwd
git --version
ls -la ~/.ssh
```

If a key already exists, do not overwrite it. Only if a new key is needed and the teaching/support team agrees, run:

```bash
ssh-keygen -t ed25519 -C "CE2000 Codio"
cat ~/.ssh/id_ed25519.pub
```

Copy only the public key line ending in `.pub`. Never display or share `~/.ssh/id_ed25519` (the private key). In the same GitHub repository, select **Settings → Deploy keys → Add deploy key**, title it `Codio`, paste the public key and leave **Allow write access** unticked, as the guide requires. A collaborator invitation and a deploy key are separate things.

## 6. Clone/pull in Codio

Use **Code → SSH** on GitHub to copy the repository's SSH URL. Substitute the real owner and repository names below:

```bash
mkdir -p ~/ce2000
cd ~/ce2000
git clone git@github.com:REPO_OWNER/REPO_NAME.git
cd REPO_NAME
git status
ls
```

If a clone already exists in Codio, do not clone again. Enter that existing folder and follow the guide to check its remote. After future pushes from VS Code, pull in Codio:

```bash
git pull --ff-only
```

## 7. Test the examples

In Codio, run the static HTML pages using the workspace preview / supported preview extension. For Node:

```bash
npm install
npm start
```

Use Codio's **Box URL** to open the server, then press `Ctrl+C` in the terminal to stop it. To test the npm package activity, run:

```bash
npm run start:case
```

This example also listens on port 8080, so stop the first server before starting it.

## Safety and error handling

- Never share a GitHub password, token or private SSH key in ChatGPT.
- Do not disable repository privacy or force-push to solve an error.
- If `git push` is rejected, inspect `git status` and the repository state first.
- If the SSH key or collaborator settings are unavailable, ask the student/teaching support team.
