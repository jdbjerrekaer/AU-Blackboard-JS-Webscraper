const data = [{
  "Week": "Week",
  "Day": "Day",
  "Lecture": "Lecture",
  "Literature": "Literature",
  "Slides": "Slides",
  "Exercises": "Exercises"
},
{
  "Week": "36",
  "Day": "Monday31/8",
  "Lecture": "First TA sessions",
  "Literature": "",
  "Slides": "",
  "Exercises": "Basic math test Blackboard registration of TA class and handin group (if known) Subscribe to discussion board forums [B] Problems 1.1-1.7"
},
{
  "Week": "36",
  "Day": "Tuesday1/9",
  "Lecture": "Introduction to Algorithms and Data Structures  10.15-11.00 IT+Hold 2+DV+DA4 11.15-12.00 DA1+DA5+DA6+DA7 12.15-13.00 DA2+DA3+DA8",
  "Literature": "[B] Section 1.1",
  "Slides": "intro.pdf",
  "Exercises": ""
},
{
  "Week": "36",
  "Day": "Friday4/9",
  "Lecture": "Sorting with swaps, selection sort",
  "Literature": "[B] Section 1.2-1.3",
  "Slides": "puzzle.pdf",
  "Exercises": "[B] Exercises 1.1, 1.2, 1.3, 1.4, 1.5, 1.6"
},
{
  "Week": "37",
  "Day": "Tuesday8/9",
  "Lecture": "Binary and linear search, longest common subsequence, Erdös & Szekeres Theorem, logarithms",
  "Literature": "[B] Section 1.4-1.7",
  "Slides": "binarysearch.pdf",
  "Exercises": "[B] Exercises 1.7, 1.8, Problems 1.9, 1.10 Handin 1: [B] Problem 1.8 (searching infinte list)"
},
{
  "Week": "37",
  "Day": "Friday11/9",
  "Lecture": "Integer arithmetic: Binary and decimal numbers, addition, subtraction, multiplication, division",
  "Literature": "[B] Section 1.8",
  "Slides": "numbers.pdf",
  "Exercises": "[B] Exercises 1.9, 1.10, 1.11, 1.12"
},
{
  "Week": "38",
  "Day": "Tuesday15/9",
  "Lecture": "Induction, invariants, transition systems",
  "Literature": "",
  "Slides": "",
  "Exercises": "Handin 2: TBA"
},
{
  "Week": "38",
  "Day": "Friday18/9",
  "Lecture": "Meeting with TA class representatives in Nygaard 395, 11:15-12:00 (Tentative reservation) Analysis tools, RAM model, insertion sort, O-notation",
  "Literature": "[CLRS] Ch. 1-3.1",
  "Slides": "ram.pdf",
  "Exercises": "[CLRS] Exercises 1.2-2, 1.2-3, 3.1-1, 3.1-4, Problems 1-1, 3-3 (ignore functions involving lg*), 3-4(a-e)"
},
{
  "Week": "39",
  "Day": "Tuesday22/9",
  "Lecture": "Mergesort, heapsort, priority queues Introduction to programming exercises",
  "Literature": "[CLRS] Ch. 2.3, 6",
  "Slides": "heaps.pdf code.pdf",
  "Exercises":
    "[CLRS] Exercises 6.1-4, 6.1-5, 6.1-6, 6.3-2, Problems 2-1, (2-4), 6-1 Handin 3: [CLRS] Problem 6-2 (d-ary heap) \n" +
    "      Programming Exercises IDue Monday 5/10, 23:59."
},
{
  "Week": "39",
  "Day": "Friday25/9",
  "Lecture": "Quicksort, median, randomized selection",
  "Literature": "[CLRS] Ch. 7, 9.1-9.2",
  "Slides": "quicksort.pdf",
  "Exercises": "[CLRS] Exercises 7.1-2, 7.2-3, 7.3-2, Problem 9-1"
},
{
  "Week": "40",
  "Day": "Tuesday29/9",
  "Lecture": "Lower bound for comparison based sorting, counting sort, radix sort, bucket sort",
  "Literature": "[CLRS] Ch. 8",
  "Slides": "sorting.pdf",
  "Exercises": "[CLRS] Exercises 8.1-1, 8.1-3, 8.2-4, 8.3-4"
},
{
  "Week": "40",
  "Day": "Friday2/10",
  "Lecture": "Stacks and queues",
  "Literature": "[CLRS] Ch. 10.1-10.2, 10.4",
  "Slides": "stacks.pdf",
  "Exercises": "[CLRS] Exercises 10.1-2, 10.1-5, 10.2-7, Problems 10-1"
},
{
  "Week": "41",
  "Day": "Tuesday6/10",
  "Lecture": "Hashing",
  "Literature": "[CLRS] Ch. 11.1-11.4",
  "Slides": "hashing.pdf",
  "Exercises": "[CLRS] Exercises 11.2-2, 11.2-5, 11.4-1 Handin 4: [CLRS] Problem 6-3 (Young tableaus)"
},
{
  "Week": "41",
  "Day": "Friday9/10",
  "Lecture": "Search trees (an unbalanced search tree implementation: Node.java, SearchTree.java)",
  "Literature": "[CLRS] Ch. 12.1-12.3",
  "Slides": "searchtrees.pdf",
  "Exercises": "[CLRS] Exercises 12.1-5, 12.2-4"
},
{ "Week": "42", "Day": "Fall break" },
{
  "Week": "43",
  "Day": "Tuesday20/10",
  "Lecture": "Balanced search trees: Red-black trees (a red-black tree implementation: RedBlackNode.java, RedBlackTree.java)",
  "Literature": "[CLRS] Ch. 13",
  "Slides": "redblack.pdf",
  "Exercises": "[CLRS] Exercises 13.1-5, 13.1-6, 13.2-2, 13.3-2, Problem (13-2) Handin 5: [CLRS] Problems 12-2 (radix trees)"
},
{
  "Week": "43",
  "Day": "Friday23/10",
  "Lecture": "Augmented search trees: Dynamic rank, interval trees, Fenwick trees",
  "Literature": "[CLRS] Ch. 14",
  "Slides": "augmented.pdf",
  "Exercises": "[CLRS] Exercises 14.1-5, 14.1-7, 14.3-4, 14.3-6, Problem 14-1 Programming Exercises IIDue Monday 2/11 23:59."
},
{
  "Week": "44",
  "Day": "Tuesday27/10",
  "Lecture": "Disjoint set union-find",
  "Literature": "[CLRS] Ch. 21.1-21.3",
  "Slides": "unionfind.pdf",
  "Exercises": "[CLRS] Exercises 21.3-3, 21.3-4, 21.3-5"
},
{
  "Week": "44",
  "Day": "Friday30/10",
  "Lecture": "Amortized analysis Example of using amortization in data structure design: Self-Adjusting Heaps (DOI: 10.1137/0215004)",
  "Literature": "[CLRS] Ch. 17",
  "Slides": "amortized.pdf",
  "Exercises": "[CLRS] Exercises 17.2-3, 17.3-3"
},
{
  "Week": "45",
  "Day": "Tuesday3/11",
  "Lecture": "Divide-and-conquer",
  "Literature": "[CLRS] Ch. 2.3, 4.2-4.5, Problem 30-1.c",
  "Slides": "divide.pdf",
  "Exercises":
    "[CLRS] Exercises 4.3-1, 4.3-2, Problem 4-1 \n" +
    "      Handin 6: \n" +
    "      (skyline)"
},
{
  "Week": "45",
  "Day": "Friday6/11",
  "Lecture": "Deterministic selection (an inplace implementation: DeterministicSelection.java)",
  "Literature": "[CLRS] Ch. 9.3",
  "Slides": "selection.pdf",
  "Exercises": "[CLRS] Exercises 9.3-1, 17.3-7"
},
{
  "Week": "46",
  "Day": "Tuesday10/11",
  "Lecture": "Dynamic programming (CutCord.java)",
  "Literature": "[CLRS] Ch. 15.1, 15.3, 15.4, Problem 15-4",
  "Slides": "dp.pdf",
  "Exercises":
    "[CLRS] Exercises 15.1-2, 15.1-3, 15.4-1, 15.4-2, 15.4-4, (15.4-5) Handin 7: \n" +
    "      (merging words)"
},
{
  "Week": "46",
  "Day": "Friday13/11",
  "Lecture": "Dynamic programming (continued) Not curriculum: Hirsberger's linear space LCS algorithm, CACM 1975 (DOI: 10.1145/360825.360861)",
  "Literature": "[CLRS] Ch. 15.2, 15.5",
  "Slides": "dp.pdf",
  "Exercises": "[CLRS] Exercises 15.5-2, 15.5-3, Problems 15-2, (15-3) Programming Exercises IIIDue Monday 23/11 23:59."
},
{
  "Week": "47",
  "Day": "Tuesday17/11",
  "Lecture": "Greedy algorithms",
  "Literature": "[CLRS] Ch. 16.1-16.3",
  "Slides": "greedy.pdf",
  "Exercises": "[CLRS] Exercises 16.1-4, 16.2-5, 16.3-6"
},
{
  "Week": "47",
  "Day": "Friday20/11",
  "Lecture": "Graph algorithms: Graph representation, breadth first search (BFS)",
  "Literature": "[CLRS] Ch. 22.1-22.2",
  "Slides": "graphs.pdf",
  "Exercises": "[CLRS] Exercises 22.1-1, 22.1-5, 22.1-6, 22.2-1, 22.2-6"
},
{
  "Week": "48",
  "Day": "Tuesday24/11",
  "Lecture": "Graph algorithms: Depth first search (DFS), topological sorting, strongly connected components",
  "Literature": "[CLRS] Ch. 22.3-22.5",
  "Slides": "dfs.pdf",
  "Exercises": "[CLRS] Exercises 22.3-1, 22.3-2, 22.4-2, 22.5-7 Handin 8: [CLRS] Problem 22-4 (reachability)"
},
{
  "Week": "48",
  "Day": "Friday27/11",
  "Lecture": "Graph algorithms: Minimum spanning trees (MST)",
  "Literature": "[CLRS] Ch. 23",
  "Slides": "mst.pdf",
  "Exercises": "[CLRS] Exercises 23.1-3, 23.1-11, 23.2-2, 23.2-4"
},
{
  "Week": "49",
  "Day": "Tuesday1/12",
  "Lecture": "Graph algorithms: Single source shortest path problem (SSSP)",
  "Literature": "[CLRS] Ch. 24.1-24.3",
  "Slides": "sssp.pdf",
  "Exercises":
    "[CLRS] Exercises 24.1-1, 24.1-3, 24.2-4, 24.3-2, 24.3-4, Problems 24-3 Handin 9: \n" +
    "      (grid graphs)"
},
{
  "Week": "49",
  "Day": "Friday4/12",
  "Lecture": "Graph algorithms: All pairs shortest path problem (APSP)",
  "Literature": "[CLRS] Ch. 25",
  "Slides": "apsp.pdf",
  "Exercises": "[CLRS] Excersies 25.1-9, 25.1-10, 25.2-4, 25.2-6 Problem 25-1 Programming Exercises IVDue Monday 14/12 23:59."
},
{
  "Week": "50",
  "Day": "Tuesday8/12",
  "Lecture": "Graph algorithms: Independent set, vertex cover",
  "Literature": "[CLRS] Ch. 35.1",
  "Slides": "",
  "Exercises": ""
},
{
  "Week": "50",
  "Day": "Friday11/12",
  "Lecture": "Course evaluation follow up, discussion of exam",
  "Literature": "",
  "Slides": "eksamen.pdf",
  "Exercises": ""
},
{
  "Week": "January",
  "Day": "",
  "Lecture": "Questions & answers sessions",
  "Literature": "",
  "Slides": "",
  "Exercises": ""
},
{
  "Week": "January",
  "Day": "",
  "Lecture": "Exam",
  "Literature": "",
  "Slides": "",
  "Exercises": ""
}]

//const createCSVFile = require('csv-file-creator');
const ObjectsToCsv = require('objects-to-csv');

//const fname = "Course Plan.csv"
//createCSVFile(fname, data);

(async () => {
  const csv = new ObjectsToCsv(data);
 
  // Save to file:
  await csv.toDisk('./Course Plan.csv');
})();