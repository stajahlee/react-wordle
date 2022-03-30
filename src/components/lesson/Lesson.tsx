// import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

type Props = {
  setIsLessonOpen: (value: boolean) => void;
};

export const Lesson = ({
  setIsLessonOpen
}: Props) => {

  return (
    <div>
      <div style={buttonContainer}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsLessonOpen(false)}
        >
          Back to Wordle
        </button>
      </div>
      <div>
        {/*<Fade indicators={true} autoplay={false} style={{ height: '80vh' }}>*/}

          <div style={style}>
            <div style={innerStyle}>
              <p className="text-sm md:text-2xl" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}>
                Online lesson coming soon!
              </p>
            </div>
          </div>

        {/*</Fade>*/}
      </div>

    </div>
  );

};

const buttonContainer = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  margin: '20px 0'
};

const style = {
  padding: "20px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column" as "column",
  height: '80vh'
};

const innerStyle = {
  width: '80%',
  height: '95%',
  backgroundColor: 'rgb(220,220,220,0.5)',
  borderRadius: 15
};