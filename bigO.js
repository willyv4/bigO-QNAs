function vowelCount(str) {
  let vowelCount = {};
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      if (char in vowelCount) {
        vowelCount[char] += 1;
      } else {
        vowelCount[char] = 1;
      }
    }
  }

  return vowelCount;
}

vowelCount(
  "hellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriendshellomyfriends"
);
