#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { exec } = require('child_process');

const execAsync = promisify(exec);

async function init() {
  try {
    // Get the current working directory
    const targetDir = process.cwd();
    
    // Check if directory is empty
    const files = fs.readdirSync(targetDir);
    if (files.length > 0) {
      console.error('Error: Directory is not empty. Please create a new empty directory.');
      process.exit(1);
    }

    console.log('Initializing EVM UI project...');

    // Clone the repository
    await execAsync('git clone https://github.com/zeJabun/evm-ui.git .');
    
    // Remove .git directory
    fs.rmSync(path.join(targetDir, '.git'), { recursive: true, force: true });
    
    // Install dependencies
    console.log('Installing dependencies...');
    execSync('pnpm install', { stdio: 'inherit' });

    console.log('\n✨ Project initialized successfully!');
    console.log('\nNext steps:');
    console.log('1. cd your-project-name');
    console.log('2. pnpm dev');
    console.log('\nHappy coding! 🚀');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

init(); 