```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This effect runs only once on mount
    // Or when other dependencies change, but not count itself
    console.log('Mounted or other dependency changed');
  }, []); // Empty dependency array means it runs only once on mount

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```