import { useState, useEffect } from 'react';

function App() {
  const [advice, setAdvice] = useState('');
  const [piecesOfAdviceViewed, setPiecesOfAdviceViewed] = useState(0);
  useEffect(() => {
    getAdvice();
  }, []);
  async function getAdvice() {
    const apiResponse = await fetch('https://api.adviceslip.com/advice');
    const adviceJsonBody = await apiResponse.json();
    setAdvice(adviceJsonBody?.slip?.advice);
    setPiecesOfAdviceViewed((piecesOfAdviceViewed) => piecesOfAdviceViewed + 1);
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className=" w-1/2 h-1/2 bg-[#EF798A] text-[#313638] rounded-lg">
        <div className="w-4/5 m-auto my-6 ">
          <h1 className="text-6xl font-thin mb-8">{advice}</h1>
          <button
            onClick={getAdvice}
            className="cursor-pointer flex items-center fill-lime-400 bg-lime-950 active:border active:border-lime-400 rounded-md duration-100 p-2"
          >
            <svg
              viewBox="0 -0.5 25 25"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="text-sm text-lime-400 font-bold pr-1">
              Get Advice
            </span>
          </button>
          <Message piecesOfAdviceViewed={piecesOfAdviceViewed} />
        </div>
      </div>
    </div>
  );
}
function Message(props: { piecesOfAdviceViewed: number }) {
  return (
    <p>
      You have received{' '}
      <span className="font-bold">{props.piecesOfAdviceViewed} </span>pieces of
      advice.
    </p>
  );
}

export default App;
