import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handlerFeedbackButton = name => {
        this.setState((prevState) => {
            return {
                [name]: prevState[name] + 1
            }
        })
    };

    countTotalFeedback() {
        return Object.values(this.state).reduce((acc, elem) => {
            return acc += elem
        }, 0)
    }
    countPositiveFeedbackPercentage(total, good) {
        return Math.round((good * 100) / total)
    }

    render() {
        const { good, neutral, bad } = this.state
        const total = this.countTotalFeedback();
        const percentage = this.countPositiveFeedbackPercentage(total, good);
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions onLeaveFeedback={this.handlerFeedbackButton} />
                </Section>
                <Section title="Statistics">
                    {total > 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={percentage}
                        />
                    ) : (
                            <Notification title="No feedback given" />
                        )}
                </Section>
            </>
        );
    }
}
