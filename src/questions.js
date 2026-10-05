export const testTitle = 'Full Stack Developer - React.js + Laravel/PHP + SQL Test'

const questions = [
  // ========== REACT.JS ==========
  {
    question: 'What is React primarily used for?',
    options: [
      'Building user interfaces',
      'Managing databases',
      'Creating operating systems',
      'Managing web servers',
    ],
    answer: 'Building user interfaces',
  },
  {
    question: 'Which company originally developed React?',
    options: ['Google', 'Facebook', 'Microsoft', 'Amazon'],
    answer: 'Facebook',
  },
  {
    question: 'Which syntax is commonly used to write HTML-like code inside JavaScript in React?',
    options: ['XML', 'JSX', 'TSX', 'HTMLX'],
    answer: 'JSX',
  },
  {
    question: 'What is the main purpose of React components?',
    options: [
      'To create reusable UI elements',
      'To connect directly to databases',
      'To replace CSS',
      'To configure web servers',
    ],
    answer: 'To create reusable UI elements',
  },
  {
    question: 'Which hook is used to manage state in a functional React component?',
    options: ['useEffect', 'useState', 'useContext', 'useRef'],
    answer: 'useState',
  },
  {
    question: 'Which hook is commonly used for side effects in React?',
    options: ['useState', 'useEffect', 'useMemo', 'useCallback'],
    answer: 'useEffect',
  },
  {
    question: 'What does useEffect primarily handle?',
    options: [
      'Side effects',
      'CSS styling',
      'Component naming',
      'Database schema creation',
    ],
    answer: 'Side effects',
  },
  {
    question: 'What is the purpose of the key prop when rendering a list?',
    options: [
      'To uniquely identify list elements',
      'To style list elements',
      'To encrypt list data',
      'To create database keys',
    ],
    answer: 'To uniquely identify list elements',
  },
  {
    question: 'Which method is commonly used to render multiple elements from an array?',
    options: ['forEach()', 'map()', 'filter()', 'reduce()'],
    answer: 'map()',
  },
  {
    question: 'What happens when a React state value changes?',
    options: [
      'The component may re-render',
      'The browser restarts',
      'The database is automatically updated',
      'The entire server restarts',
    ],
    answer: 'The component may re-render',
  },
  {
    question: 'What are props in React?',
    options: [
      'Data passed from parent to child components',
      'Database records',
      'CSS variables',
      'Server configurations',
    ],
    answer: 'Data passed from parent to child components',
  },
  {
    question: 'Are React props normally mutable by the child component?',
    options: ['Yes', 'No', 'Only with useEffect', 'Only with useState'],
    answer: 'No',
  },
  {
    question: 'Which hook is useful for accessing a DOM element directly?',
    options: ['useState', 'useEffect', 'useRef', 'useMemo'],
    answer: 'useRef',
  },
  {
    question: 'Which hook is commonly used to memoize a calculated value?',
    options: ['useMemo', 'useState', 'useEffect', 'useContext'],
    answer: 'useMemo',
  },
  {
    question: 'Which hook is commonly used to memoize a function?',
    options: ['useCallback', 'useState', 'useRef', 'useReducer'],
    answer: 'useCallback',
  },
  {
    question: 'What is React Router commonly used for?',
    options: [
      'Client-side routing',
      'Database management',
      'API authentication',
      'CSS preprocessing',
    ],
    answer: 'Client-side routing',
  },
  {
    question: 'Which command commonly creates a new Vite React project?',
    options: [
      'npm create vite@latest',
      'npm install react-project',
      'react create vite',
      'npm new react',
    ],
    answer: 'npm create vite@latest',
  },
  {
    question: 'What does lifting state up mean in React?',
    options: [
      'Moving shared state to a common parent',
      'Moving state to the database',
      'Deleting component state',
      'Moving state into CSS',
    ],
    answer: 'Moving shared state to a common parent',
  },
  {
    question: 'Which React feature allows components to access shared values without passing props through every level?',
    options: ['Context API', 'JSX', 'Fragments', 'Keys'],
    answer: 'Context API',
  },
  {
    question: 'What is a controlled input in React?',
    options: [
      'An input whose value is controlled by React state',
      'An input controlled only by CSS',
      'An input stored directly in SQL',
      'An input that cannot be changed',
    ],
    answer: 'An input whose value is controlled by React state',
  },
  {
    question: 'What is conditional rendering in React?',
    options: [
      'Rendering UI based on a condition',
      'Rendering only CSS',
      'Rendering database tables',
      'Rendering only on the server',
    ],
    answer: 'Rendering UI based on a condition',
  },
  {
    question: 'Which operator is commonly used for simple conditional rendering in JSX?',
    options: ['&&', '++', '**', '=>'],
    answer: '&&',
  },
  {
    question: 'What is React Fragment used for?',
    options: [
      'Grouping elements without adding an extra DOM element',
      'Creating database tables',
      'Fetching APIs',
      'Managing authentication',
    ],
    answer: 'Grouping elements without adding an extra DOM element',
  },
  {
    question: 'Which file extension is commonly used for React components containing JSX?',
    options: ['.jsx', '.sql', '.php', '.laravel'],
    answer: '.jsx',
  },
  {
    question: 'What is the virtual DOM?',
    options: [
      'A lightweight representation of the DOM maintained by React',
      'A physical server',
      'A database',
      'A CSS framework',
    ],
    answer: 'A lightweight representation of the DOM maintained by React',
  },
  {
    question: 'What is the purpose of React.memo()?',
    options: [
      'To avoid unnecessary component re-renders when props have not changed',
      'To fetch API data',
      'To create state',
      'To create routes',
    ],
    answer: 'To avoid unnecessary component re-renders when props have not changed',
  },
  {
    question: 'Which hook can be used to manage more complex component state?',
    options: ['useReducer', 'useEffect', 'useRef', 'useMemo'],
    answer: 'useReducer',
  },
  {
    question: 'What is a custom hook in React?',
    options: [
      'A reusable function containing React hook logic',
      'A special database query',
      'A CSS component',
      'A backend controller',
    ],
    answer: 'A reusable function containing React hook logic',
  },
  {
    question: 'Which React hook is used to consume a context value?',
    options: ['useContext', 'useState', 'useReducer', 'useMemo'],
    answer: 'useContext',
  },
  {
    question: 'Why should array indexes generally be avoided as React keys when list items can change order?',
    options: [
      'They can cause incorrect component identity and rendering behavior',
      'They make CSS invalid',
      'They prevent API requests',
      'They cause SQL errors',
    ],
    answer: 'They can cause incorrect component identity and rendering behavior',
  },

  // ========== LARAVEL / PHP ==========
  {
    question: 'Laravel is a framework for which programming language?',
    options: ['JavaScript', 'PHP', 'Python', 'Java'],
    answer: 'PHP',
  },
  {
    question: 'Which architectural pattern is commonly associated with Laravel?',
    options: ['MVC', 'MVVM only', 'Layer 7', 'Peer-to-peer'],
    answer: 'MVC',
  },
  {
    question: 'What does MVC stand for?',
    options: [
      'Model View Controller',
      'Main View Component',
      'Model Variable Controller',
      'Module View Configuration',
    ],
    answer: 'Model View Controller',
  },
  {
    question: 'Which Laravel component is commonly used to define API routes?',
    options: ['routes/api.php', 'config/api.php', 'api/routes.php', 'database/api.php'],
    answer: 'routes/api.php',
  },
  {
    question: 'Which command creates a new Laravel project using the Laravel installer?',
    options: [
      'laravel new project-name',
      'php create laravel project-name',
      'laravel create project-name',
      'composer laravel new',
    ],
    answer: 'laravel new project-name',
  },
  {
    question: 'Which command is commonly used to create a Laravel controller?',
    options: [
      'php artisan make:controller UserController',
      'php make controller UserController',
      'artisan controller:create UserController',
      'php artisan controller UserController',
    ],
    answer: 'php artisan make:controller UserController',
  },
  {
    question: 'Which Laravel ORM is used to interact with database models?',
    options: ['Eloquent', 'Doctrine only', 'Hibernate', 'Sequelize'],
    answer: 'Eloquent',
  },
  {
    question: 'What is Eloquent?',
    options: [
      'Laravel ORM',
      'Laravel authentication package',
      'Laravel frontend framework',
      'Laravel CSS engine',
    ],
    answer: 'Laravel ORM',
  },
  {
    question: 'Which command creates a migration?',
    options: [
      'php artisan make:migration',
      'php artisan migration:create',
      'php migration make',
      'laravel make:migration',
    ],
    answer: 'php artisan make:migration',
  },
  {
    question: 'Which command runs pending Laravel migrations?',
    options: [
      'php artisan migrate',
      'php artisan migration:run',
      'php migrate',
      'laravel migrate:start',
    ],
    answer: 'php artisan migrate',
  },
  {
    question: 'What is Laravel Sanctum commonly used for?',
    options: [
      'API authentication',
      'Database backups',
      'CSS styling',
      'Image compression',
    ],
    answer: 'API authentication',
  },
  {
    question: 'Which file normally contains environment-specific configuration such as database credentials?',
    options: ['.env', 'config.php', 'database.env.php', 'environment.json'],
    answer: '.env',
  },
  {
    question: 'Which PHP symbol is used before a variable name?',
    options: ['$', '#', '@', '&'],
    answer: '$',
  },
  {
    question: 'Which PHP keyword is used to define a class?',
    options: ['class', 'struct', 'object', 'model'],
    answer: 'class',
  },
  {
    question: 'Which PHP keyword is used to inherit from another class?',
    options: ['extends', 'inherits', 'implements', 'parent'],
    answer: 'extends',
  },
  {
    question: 'What does a Laravel middleware primarily do?',
    options: [
      'Filter or inspect HTTP requests',
      'Create database tables',
      'Compile React',
      'Replace controllers',
    ],
    answer: 'Filter or inspect HTTP requests',
  },
  {
    question: 'Which Artisan command starts Laravels local development server?',
    options: [
      'php artisan serve',
      'php laravel start',
      'laravel serve:start',
      'php artisan server',
    ],
    answer: 'php artisan serve',
  },
  {
    question: 'What is dependency injection used for in Laravel?',
    options: [
      'Providing required dependencies to classes',
      'Creating database tables',
      'Writing CSS',
      'Compressing images',
    ],
    answer: 'Providing required dependencies to classes',
  },
  {
    question: 'Which Laravel feature is commonly used to validate incoming request data?',
    options: ['Form Request / Validator', 'Blade only', 'Eloquent only', 'Migration'],
    answer: 'Form Request / Validator',
  },
  {
    question: 'Which command creates a model and migration together?',
    options: [
      'php artisan make:model Product -m',
      'php artisan make:database Product',
      'php artisan model:migration Product',
      'php artisan create:model Product',
    ],
    answer: 'php artisan make:model Product -m',
  },
  {
    question: 'What is a Laravel Resource commonly used for?',
    options: [
      'Transforming models into API response structures',
      'Creating database indexes',
      'Managing CSS',
      'Starting the server',
    ],
    answer: 'Transforming models into API response structures',
  },
  {
    question: 'Which HTTP status code normally means "Unauthorized"?',
    options: ['200', '201', '401', '404'],
    answer: '401',
  },
  {
    question: 'Which HTTP status code normally means "Forbidden"?',
    options: ['200', '301', '403', '500'],
    answer: '403',
  },
  {
    question: 'Which HTTP status code means "Not Found"?',
    options: ['400', '401', '404', '500'],
    answer: '404',
  },
  {
    question: 'Which HTTP method is commonly used to update an existing resource?',
    options: ['GET', 'POST', 'PUT/PATCH', 'OPTIONS'],
    answer: 'PUT/PATCH',
  },
  {
    question: 'Which HTTP method is normally used to delete a resource?',
    options: ['GET', 'POST', 'DELETE', 'HEAD'],
    answer: 'DELETE',
  },

  // ========== POSTGRESQL / MYSQL / SQL ==========
  {
    question: 'What does SQL stand for?',
    options: [
      'Structured Query Language',
      'Simple Query Language',
      'System Query Logic',
      'Structured Question Language',
    ],
    answer: 'Structured Query Language',
  },
  {
    question: 'Which command is used to retrieve data from a database?',
    options: ['SELECT', 'GET', 'FETCH ALL', 'READ'],
    answer: 'SELECT',
  },
  {
    question: 'Which SQL command is used to insert a new record?',
    options: ['INSERT', 'ADD', 'CREATE ROW', 'PUT'],
    answer: 'INSERT',
  },
  {
    question: 'Which SQL command is used to modify existing records?',
    options: ['UPDATE', 'MODIFY', 'CHANGE', 'ALTER ROW'],
    answer: 'UPDATE',
  },
  {
    question: 'Which SQL command is used to remove records from a table?',
    options: ['DELETE', 'REMOVE', 'DROP ROW', 'CLEAR'],
    answer: 'DELETE',
  },
  {
    question: 'What is a primary key?',
    options: [
      'A column that uniquely identifies each row',
      'A column containing only text',
      'A duplicate column',
      'A temporary column',
    ],
    answer: 'A column that uniquely identifies each row',
  },
  {
    question: 'What is a foreign key used for?',
    options: [
      'Creating relationships between tables',
      'Encrypting passwords',
      'Sorting records',
      'Creating backups',
    ],
    answer: 'Creating relationships between tables',
  },
  {
    question: 'Which clause filters rows based on a condition?',
    options: ['WHERE', 'FILTER', 'HAVING ONLY', 'CONDITION'],
    answer: 'WHERE',
  },
  {
    question: 'Which clause is used to sort query results?',
    options: ['SORT BY', 'ORDER BY', 'GROUP BY', 'ARRANGE BY'],
    answer: 'ORDER BY',
  },
  {
    question: 'Which clause groups rows having the same values?',
    options: ['GROUP BY', 'ORDER BY', 'COLLECT BY', 'MERGE BY'],
    answer: 'GROUP BY',
  },
  {
    question: 'Which SQL function counts rows?',
    options: ['COUNT()', 'TOTAL()', 'NUMBER()', 'ROWS()'],
    answer: 'COUNT()',
  },
  {
    question: 'Which SQL function calculates the average?',
    options: ['AVG()', 'MEAN()', 'AVERAGE()', 'MID()'],
    answer: 'AVG()',
  },
  {
    question: 'Which SQL function calculates the total?',
    options: ['SUM()', 'TOTAL()', 'ADD()', 'COUNT()'],
    answer: 'SUM()',
  },
  {
    question: 'Which JOIN returns matching rows from both tables?',
    options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN'],
    answer: 'INNER JOIN',
  },
  {
    question: 'Which JOIN returns all rows from the left table and matching rows from the right table?',
    options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'CROSS JOIN'],
    answer: 'LEFT JOIN',
  },
  {
    question: 'What does normalization primarily help reduce?',
    options: [
      'Data redundancy',
      'Database security',
      'Network speed',
      'CPU temperature',
    ],
    answer: 'Data redundancy',
  },
  {
    question: 'Which constraint prevents NULL values in a column?',
    options: ['NOT NULL', 'NO NULL', 'REQUIRED', 'IS NOT NULL'],
    answer: 'NOT NULL',
  },
  {
    question: 'Which constraint ensures values in a column are unique?',
    options: ['UNIQUE', 'DISTINCT', 'ONLY', 'NO DUPLICATES'],
    answer: 'UNIQUE',
  },
  {
    question: 'Which command removes an entire table?',
    options: ['DROP TABLE', 'DELETE TABLE', 'REMOVE TABLE', 'CLEAR TABLE'],
    answer: 'DROP TABLE',
  },
  {
    question: 'What is an index mainly used for?',
    options: [
      'Improving query performance',
      'Storing passwords',
      'Creating backups',
      'Replacing primary keys',
    ],
    answer: 'Improving query performance',
  },
  {
    question: 'What is a database transaction?',
    options: [
      'A group of operations treated as a unit',
      'A database table',
      'A database password',
      'A type of index',
    ],
    answer: 'A group of operations treated as a unit',
  },
  {
    question: 'Which database system is developed as an open-source object-relational database system?',
    options: ['PostgreSQL', 'Microsoft Word', 'Redis only', 'Excel'],
    answer: 'PostgreSQL',
  },
  {
    question: 'Which SQL command is used to change the structure of an existing table?',
    options: ['ALTER TABLE', 'UPDATE TABLE', 'CHANGE TABLE', 'MODIFY DATABASE'],
    answer: 'ALTER TABLE',
  },
  {
    question: 'What does ACID in database transactions stand for?',
    options: [
      'Atomicity, Consistency, Isolation, Durability',
      'Access, Control, Index, Data',
      'Atomic, Central, Internal, Database',
      'Access, Consistency, Integration, Distribution',
    ],
    answer: 'Atomicity, Consistency, Isolation, Durability',
  },
  {
    question: 'Which clause is used to filter grouped results?',
    options: ['HAVING', 'WHERE', 'GROUP FILTER', 'AFTER GROUP'],
    answer: 'HAVING',
  },
  {
    question: 'What is a composite key?',
    options: [
      'A key made from multiple columns',
      'A key containing only numbers',
      'A foreign key with encryption',
      'A duplicate primary key',
    ],
    answer: 'A key made from multiple columns',
  },

  // ========== JAVASCRIPT / WEB ==========
  {
    question: 'Which keyword declares a block-scoped variable that can be reassigned?',
    options: ['let', 'const', 'var', 'define'],
    answer: 'let',
  },
  {
    question: 'Which keyword declares a block-scoped variable that cannot be reassigned?',
    options: ['let', 'const', 'var', 'static'],
    answer: 'const',
  },
  {
    question: 'What does === check in JavaScript?',
    options: [
      'Strict equality of value and type',
      'Only value',
      'Only type',
      'Assignment',
    ],
    answer: 'Strict equality of value and type',
  },
  {
    question: 'What does JSON stand for?',
    options: [
      'JavaScript Object Notation',
      'Java Standard Object Network',
      'JavaScript Online Notation',
      'JSON Object Network',
    ],
    answer: 'JavaScript Object Notation',
  },
  {
    question: 'Which method converts a JavaScript object into a JSON string?',
    options: ['JSON.stringify()', 'JSON.parse()', 'JSON.convert()', 'JSON.encode()'],
    answer: 'JSON.stringify()',
  },
  {
    question: 'Which method converts a JSON string into a JavaScript object?',
    options: ['JSON.parse()', 'JSON.stringify()', 'JSON.decode()', 'JSON.object()'],
    answer: 'JSON.parse()',
  },
  {
    question: 'What does async/await help with?',
    options: [
      'Writing asynchronous code in a more readable way',
      'Creating CSS animations',
      'Creating SQL tables',
      'Replacing JavaScript',
    ],
    answer: 'Writing asynchronous code in a more readable way',
  },
  {
    question: 'Which HTTP method is normally used to retrieve data?',
    options: ['GET', 'POST', 'PUT', 'DELETE'],
    answer: 'GET',
  },
  {
    question: 'Which HTTP method is commonly used to create a new resource?',
    options: ['GET', 'POST', 'DELETE', 'HEAD'],
    answer: 'POST',
  },
  {
    question: 'What is REST API?',
    options: [
      'An architectural style for designing networked APIs',
      'A database engine',
      'A React hook',
      'A PHP package',
    ],
    answer: 'An architectural style for designing networked APIs',
  },
  {
    question: 'What does CORS stand for?',
    options: [
      'Cross-Origin Resource Sharing',
      'Central Object Request System',
      'Cross-Origin Routing Service',
      'Client Object Response Security',
    ],
    answer: 'Cross-Origin Resource Sharing',
  },
  {
    question: 'What is the purpose of environment variables in a web application?',
    options: [
      'To store configuration values that can vary by environment',
      'To replace JavaScript',
      'To create database tables',
      'To style components',
    ],
    answer: 'To store configuration values that can vary by environment',
  },
  {
    question: 'Which HTTP status code usually indicates a successful request?',
    options: ['200', '301', '404', '500'],
    answer: '200',
  },
  {
    question: 'Which HTTP status code commonly indicates that a resource was successfully created?',
    options: ['200', '201', '204', '400'],
    answer: '201',
  },
  {
    question: 'Which HTTP status code represents a server-side error?',
    options: ['200', '301', '404', '500'],
    answer: '500',
  },
  {
    question: 'What is Git primarily used for?',
    options: [
      'Version control',
      'Database management',
      'CSS compilation',
      'API authentication',
    ],
    answer: 'Version control',
  },
  {
    question: 'Which command downloads a Git repository to your local machine?',
    options: ['git clone', 'git pull-only', 'git download', 'git copy'],
    answer: 'git clone',
  },
  {
    question: 'What does npm primarily manage in a JavaScript project?',
    options: [
      'Packages and dependencies',
      'SQL databases',
      'Operating systems',
      'PHP extensions',
    ],
    answer: 'Packages and dependencies',
  },
  {
    question: 'What is TypeScript?',
    options: [
      'A typed superset of JavaScript',
      'A database system',
      'A PHP framework',
      'A CSS framework',
    ],
    answer: 'A typed superset of JavaScript',
  },
  {
    question: 'What is the main purpose of hashing passwords?',
    options: [
      'To store passwords in a non-reversible protected form',
      'To make passwords shorter',
      'To send passwords faster',
      'To display passwords in the UI',
    ],
    answer: 'To store passwords in a non-reversible protected form',
  },
]

export default questions