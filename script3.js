// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

for(num = 1; num <= 8; num++){
    if(num % 2 == 0){
        console.log("# # # #");
    } else {
        console.log(" # # # #");
    }
}