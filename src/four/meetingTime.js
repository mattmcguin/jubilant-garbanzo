// Matt McGuiness - 3/8/18

// Compare function used to sort array by startTime
function compare(a, b) {
    if (a.startTime < b.startTime)
        return -1;
    if (a.startTime > b.startTime)
        return 1;
    return 0;
}

function mergeRanges(meetings) {

    // merge meeting ranges
    meetings.sort(compare);
    let mergedRangeArray = [meetings[0]];

    for (let i = 0; i < meetings.length; i++) {
        // The meetings we are comparing
        let currentMeeting = meetings[i];
        let lastMergedMeeting = mergedRangeArray[mergedRangeArray.length - 1];

        if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
        } else {
            mergedRangeArray.push(currentMeeting);
        }
    }

    return mergedRangeArray;
}

const meetings = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 }
];

console.log(mergeRanges(meetings));