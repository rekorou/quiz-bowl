// Central question bank for all rounds.
// You can later move this to a real REST API or database.

export const rounds = [
  {
    id: 'easy',
    name: 'Easy Round',
    difficulty: 'EASY',
    pointsPerQuestion: 1,
    totalQuestions: 10,
    timePerQuestionSeconds: 15,
  },
  {
    id: 'average',
    name: 'Average Round',
    difficulty: 'AVERAGE',
    pointsPerQuestion: 3,
    totalQuestions: 10,
    timePerQuestionSeconds: 30,
  },
  {
    id: 'difficult',
    name: 'Difficult Round',
    difficulty: 'DIFFICULT',
    pointsPerQuestion: 5,
    totalQuestions: 5,
    timePerQuestionSeconds: 60,
  },
  {
    id: 'sudden-death',
    name: 'Sudden Death Round',
    difficulty: 'SUDDEN DEATH',
    pointsPerQuestion: 5,
    totalQuestions: 20,
    timePerQuestionSeconds: 15,
  },
]

export const questions = [
  // EASY (1 point each – 10 questions | 15 seconds per question)
  { id: 'easy-1', roundId: 'easy', order: 1, text: 'What does CPU stand for?', options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Program Utility', 'Core Processing User'], correctOptionIndex: 0 },
  { id: 'easy-2', roundId: 'easy', order: 2, text: 'Which of the following is an input device?', options: ['Monitor', 'Printer', 'Keyboard', 'Speaker'], correctOptionIndex: 2 },
  { id: 'easy-3', roundId: 'easy', order: 3, text: 'What symbol is commonly used to end a statement in many programming languages like C or Java?', options: [',', ':', '.', ';'], correctOptionIndex: 3 },
  { id: 'easy-4', roundId: 'easy', order: 4, text: 'Which data type stores true or false values?', options: ['Integer', 'String', 'Boolean', 'Float'], correctOptionIndex: 2 },
  { id: 'easy-5', roundId: 'easy', order: 5, text: 'What is a variable used for in programming?', options: ['To display images', 'To store data', 'To compile code', 'To delete files'], correctOptionIndex: 1 },
  { id: 'easy-6', roundId: 'easy', order: 6, text: 'Which of the following best describes an algorithm?', options: ['A programming language', 'A step-by-step solution to a problem', 'A computer hardware component', 'A software application'], correctOptionIndex: 1 },
  { id: 'easy-7', roundId: 'easy', order: 7, text: 'In games, what is a "score"?', options: ['A game character', 'A visual effect', 'A value representing player progress', 'A type of level'], correctOptionIndex: 2 },
  { id: 'easy-8', roundId: 'easy', order: 8, text: 'What does RAM stand for?', options: ['Random Access Memory', 'Read Access Machine', 'Rapid Action Module', 'Run All Memory'], correctOptionIndex: 0 },
  { id: 'easy-9', roundId: 'easy', order: 9, text: 'Which programming concept repeats a block of code?', options: ['Variable', 'Loop', 'Function', 'Comment'], correctOptionIndex: 1 },
  { id: 'easy-10', roundId: 'easy', order: 10, text: 'Ethics primarily deals with questions about:', options: ['Speed', 'Beauty', 'Right and wrong', 'Technology'], correctOptionIndex: 2 },
  // AVERAGE (3 points each – 10 questions | 30 seconds per question)
  { id: 'avg-1', roundId: 'average', order: 1, text: 'Which of the following is an example of system software?', options: ['Microsoft Word', 'Google Chrome', 'Operating System', 'Mobile Game'], correctOptionIndex: 2 },
  { id: 'avg-2', roundId: 'average', order: 2, text: 'What is the output of 5 + 3 * 2?', options: ['16', '11', '13', '10'], correctOptionIndex: 1 },
  { id: 'avg-3', roundId: 'average', order: 3, text: 'Which data structure follows the FIFO principle?', options: ['Stack', 'Tree', 'Queue', 'Graph'], correctOptionIndex: 2 },
  { id: 'avg-4', roundId: 'average', order: 4, text: 'What is the main purpose of a function?', options: ['To store multiple values', 'To repeat code manually', 'To organize and reuse code', 'To stop program execution'], correctOptionIndex: 2 },
  { id: 'avg-5', roundId: 'average', order: 5, text: 'Which algorithm technique breaks a problem into smaller subproblems?', options: ['Brute Force', 'Divide and Conquer', 'Greedy', 'Backtracking'], correctOptionIndex: 1 },
  { id: 'avg-6', roundId: 'average', order: 6, text: 'In game development, what does "collision detection" handle?', options: ['Sound effects', 'Character movement', 'Interaction between game objects', 'Saving game progress'], correctOptionIndex: 2 },
  { id: 'avg-7', roundId: 'average', order: 7, text: 'What data structure is best for implementing undo/redo operations?', options: ['Queue', 'Stack', 'Array', 'Linked List'], correctOptionIndex: 1 },
  { id: 'avg-8', roundId: 'average', order: 8, text: 'Which programming paradigm focuses on objects and classes?', options: ['Procedural', 'Functional', 'Object-Oriented', 'Logical'], correctOptionIndex: 2 },
  { id: 'avg-9', roundId: 'average', order: 9, text: 'Meta-ethics is mainly concerned with:', options: ['Applying rules to actions', 'Moral emotions', 'The meaning of moral terms', 'Legal systems'], correctOptionIndex: 2 },
  { id: 'avg-10', roundId: 'average', order: 10, text: 'Which is an example of a conditional statement?', options: ['for', 'while', 'if', 'print'], correctOptionIndex: 2 },
  // DIFFICULT (5 points each – 5 questions | 60 seconds per question)
  { id: 'diff-1', roundId: 'difficult', order: 1, text: 'What is the time complexity of binary search in a sorted array?', options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'], correctOptionIndex: 2 },
  { id: 'diff-2', roundId: 'difficult', order: 2, text: 'Which data structure is most suitable for representing hierarchical relationships?', options: ['Array', 'Queue', 'Tree', 'Stack'], correctOptionIndex: 2 },
  { id: 'diff-3', roundId: 'difficult', order: 3, text: 'In game development, which component is primarily responsible for rendering graphics?', options: ['Physics Engine', 'Game Loop', 'Rendering Engine', 'Input Handler'], correctOptionIndex: 2 },
  { id: 'diff-4', roundId: 'difficult', order: 4, text: 'What does Big-O notation describe?', options: ['Memory address', 'Algorithm efficiency', 'Code syntax', 'Variable scope'], correctOptionIndex: 1 },
  { id: 'diff-5', roundId: 'difficult', order: 5, text: 'Which statement best describes moral realism in meta-ethics?', options: ['Moral values depend on culture', 'Moral statements are meaningless', 'Moral facts exist independently of beliefs', 'Ethics is purely emotional'], correctOptionIndex: 2 },
  // SUDDEN DEATH (5 points each – 20 questions | 15 seconds per question)
  { id: 'sd-1', roundId: 'sudden-death', order: 1, text: 'What is the worst-case time complexity of Quick Sort?', options: ['O(n log n)', 'O(log n)', 'O(n²)', 'O(n)'], correctOptionIndex: 2 },
  { id: 'sd-2', roundId: 'sudden-death', order: 2, text: 'Which data structure is used internally by a recursive function call?', options: ['Queue', 'Heap', 'Stack', 'Array'], correctOptionIndex: 2 },
  { id: 'sd-3', roundId: 'sudden-death', order: 3, text: 'In a game loop, which step usually runs every frame?', options: ['Asset loading', 'Rendering', 'Installation', 'Compilation'], correctOptionIndex: 1 },
  { id: 'sd-4', roundId: 'sudden-death', order: 4, text: 'What does "heap" refer to in memory management?', options: ['Sorted memory', 'Dynamic memory allocation area', 'CPU cache', 'Stack overflow space'], correctOptionIndex: 1 },
  { id: 'sd-5', roundId: 'sudden-death', order: 5, text: 'Which traversal of a binary search tree outputs sorted values?', options: ['Pre-order', 'Post-order', 'In-order', 'Level-order'], correctOptionIndex: 2 },
  { id: 'sd-6', roundId: 'sudden-death', order: 6, text: 'Which algorithm guarantees the shortest path in a weighted graph with non-negative edges?', options: ['DFS', 'BFS', "Dijkstra's Algorithm", "Kruskal's Algorithm"], correctOptionIndex: 2 },
  { id: 'sd-7', roundId: 'sudden-death', order: 7, text: 'In object-oriented programming, what does polymorphism allow?', options: ['Multiple inheritance only', 'One function name, many behaviors', 'Objects without classes', 'Private variables'], correctOptionIndex: 1 },
  { id: 'sd-8', roundId: 'sudden-death', order: 8, text: 'Which game development concept controls the rate at which a game updates?', options: ['Tick rate', 'Frame limiter', 'Game loop', 'Event handler'], correctOptionIndex: 2 },
  { id: 'sd-9', roundId: 'sudden-death', order: 9, text: 'What happens if stack memory is exceeded?', options: ['Program speeds up', 'Heap fragmentation', 'Stack overflow', 'Memory leak'], correctOptionIndex: 2 },
  { id: 'sd-10', roundId: 'sudden-death', order: 10, text: 'Which sorting algorithm is considered stable?', options: ['Quick Sort', 'Merge Sort', 'Heap Sort', 'Selection Sort'], correctOptionIndex: 1 },
  { id: 'sd-11', roundId: 'sudden-death', order: 11, text: 'What does Big-O notation primarily measure?', options: ['Code length', 'Memory address size', 'Algorithm efficiency', 'Execution order'], correctOptionIndex: 2 },
  { id: 'sd-12', roundId: 'sudden-death', order: 12, text: 'Which of the following is NOT a game engine responsibility?', options: ['Physics simulation', 'Rendering graphics', 'Writing game rules', 'Handling input'], correctOptionIndex: 2 },
  { id: 'sd-13', roundId: 'sudden-death', order: 13, text: 'In meta-ethics, moral relativism suggests that:', options: ['Moral truths are universal', 'Moral facts do not exist', 'Moral judgments depend on culture', 'Ethics is emotional only'], correctOptionIndex: 2 },
  { id: 'sd-14', roundId: 'sudden-death', order: 14, text: 'What is the main advantage of a hash table?', options: ['Ordered data', 'Constant-time average access', 'Reduced memory usage', 'Recursive traversal'], correctOptionIndex: 1 },
  { id: 'sd-15', roundId: 'sudden-death', order: 15, text: 'Which algorithm is best for cycle detection in a graph?', options: ['Binary Search', 'Depth-First Search', 'Linear Search', 'Selection Sort'], correctOptionIndex: 1 },
  { id: 'sd-16', roundId: 'sudden-death', order: 16, text: 'In game AI, what is "pathfinding" used for?', options: ['Rendering textures', 'Audio mixing', 'Finding optimal movement routes', 'Collision resolution'], correctOptionIndex: 2 },
  { id: 'sd-17', roundId: 'sudden-death', order: 17, text: 'Which concept prevents direct access to object data?', options: ['Inheritance', 'Abstraction', 'Encapsulation', 'Polymorphism'], correctOptionIndex: 2 },
  { id: 'sd-18', roundId: 'sudden-death', order: 18, text: 'What does a memory leak indicate?', options: ['Unused memory not released', 'Stack overflow', 'CPU overheating', 'Disk corruption'], correctOptionIndex: 0 },
  { id: 'sd-19', roundId: 'sudden-death', order: 19, text: 'Which ethical theory argues actions are right if they maximize overall happiness?', options: ['Deontology', 'Virtue Ethics', 'Utilitarianism', 'Moral Nihilism'], correctOptionIndex: 2 },
  { id: 'sd-20', roundId: 'sudden-death', order: 20, text: 'Why is floating-point arithmetic risky in games?', options: ['Too slow', 'Causes compiler errors', 'Precision errors accumulate', 'Uses too much RAM'], correctOptionIndex: 2 },
]

export function getRoundById(roundId) {
  return rounds.find((r) => r.id === roundId) ?? null
}

export function getQuestionsForRound(roundId) {
  return questions
    .filter((q) => q.roundId === roundId)
    .sort((a, b) => a.order - b.order)
}
