const simpleGit = require('simple-git');
const dayjs = require('dayjs');
const fs = require('fs');

const git = simpleGit();
const WEEKS = 24; // 6 months (24 weeks)

// Function to create a temporary file and commit it
async function commitWithPastDate(message, date) {
    try {
        const formattedDate = date.format('YYYY-MM-DD HH:mm:ss');
        const env = {
            GIT_COMMITTER_DATE: formattedDate,
            GIT_AUTHOR_DATE: formattedDate
        };

        // Modify a dummy file to ensure a new commit
        const filename = `history-${date.format('YYYYMMDD')}.txt`;
        fs.writeFileSync(filename, `Commit created on ${formattedDate}`);

        await git.add(filename); // Stage file
        await git.commit(message, undefined, { env }); // Commit with backdated timestamp
        console.log(`✅ Commit added on ${formattedDate}: "${message}"`);
    } catch (error) {
        console.error("❌ Error committing:", error);
    }
}

async function generateBackdatedCommits() {
    let currentDate = dayjs().subtract(WEEKS, 'weeks'); // Go back 6 months

    for (let i = 0; i < WEEKS; i++) {
        let commitDate = currentDate.add(i, 'weeks'); // Weekly commits
        let message = `Backdated commit from ${commitDate.format('YYYY-MM-DD')}`;

        await commitWithPastDate(message, commitDate);
    }

    // Push changes after all commits
    await git.push();
    console.log("🚀 All commits pushed successfully!");
}

generateBackdatedCommits();
