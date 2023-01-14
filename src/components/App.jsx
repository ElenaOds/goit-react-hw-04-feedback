import {useState} from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification'

export function App()  {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleIncrement = option => {
     switch(option) {
        case 'good':
            setGood(prevGood => prevGood +1);
            break;
        
        case 'neutral':
            setNeutral(prevNeutral => prevNeutral +1);
            break;

        case 'bad':
            setBad(prevBad => prevBad +1);
            break;

        default:
            return;
     }
    };


const countTotalFeedback = () => {
let total = good + neutral + bad;
return total;
};

const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100 || 0)
};
 
    return (
    <div>
        <Section title="Please leave feedback">

        <FeedbackOptions 
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleIncrement}/>
       </Section>
        
       <Section title="Statistics">
       {countTotalFeedback() !== 0 ? (
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
            />
       ) : (
        <Notification message="There is no feedback"></Notification>
       )}
       </Section>
    </div>
    )
    
    }


export default App;