// A child is running up a staircase with n steps and can hop either 1 step, 2 seps, or 3 steps at a time.
// Implement a method to count how many possible ways the child can run up the stairs.

function numerOfWaysToClimb(n: number){

  if(n<3) return n;
  if(n==3) return 4;

  const dp = new Array();
  dp[0] = 1;
  dp[1] = 2;
  dp[2] = 4;

  for(let i=3; i<n;i++){
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
  }

  return dp[n-1];

}

// Complexity 
// Time: O(n)
// Space: O(n)
// We could improve the used space using just the first three values in independent variables