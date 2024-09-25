import './App.css';

// Function demonstrating curly braces for attributes
function AttributeExample() {
  return (
    <img
      className="Geralt"
      src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8SOUC4tobyTiyKGlLZu_JkgWsB3h8j3J0g&s'}
      alt={'This is Geralt of Rivia'}
    />
  );
}

// Function demonstrating curly braces inside an HTML tag
function HtmlTagExample() {
  return <h1>{'Geralt Roger Eric du Haute-Bellegarde'} Aliases are White Wolf, Gwynbleidd, White One, Butcher of Blaviken</h1>;
}

// Function demonstrating in-line CSS
function InlineCssExample() {
  return (
    <div style={{
      backgroundColor: 'midnightblue',
      padding: '20px',
      borderRadius: '5px',
      color: 'white',
    }}>
      <h1>The Witcher 3</h1>
    </div>
  );
}

// Function demonstrating curly braces for an object with both a name and a theme
function ObjectExample() {
  const user = {
    name: 'Geralt of Rivia',
    theme: 'dark',
    hometown: 'Rivia, Lyria',
    occupation: 'Witcher',
  };

  return (
    <div>
      <p>User: {user.name}</p>
      <p>Theme: {user.theme}</p>
      <p>Hometown: {user.hometown}</p>
      <p>Occupation: {user.occupation}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>React Examples</h1>
      <AttributeExample />
      <HtmlTagExample />
      <InlineCssExample />
      <ObjectExample />
    </div>
  );
}
