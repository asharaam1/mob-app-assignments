import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const QuizApp = () => {
  const QUIZ_DATA = [
    {
      question: "Which language is used for React Native?",
      options: ["Python", "Java", "JavaScript", "C++"],
      correctAnswer: "JavaScript",
    },
    {
      question: "Who developed React Native?",
      options: ["Google", "Facebook", "Microsoft", "Apple"],
      correctAnswer: "Facebook",
    },
    {
      question: "Which component is used to show a list in React Native?",
      options: ["ScrollView", "FlatList", "View", "Text"],
      correctAnswer: "FlatList",
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax X",
        "JSON Syntax",
        "JavaScript Xylophone",
      ],
      correctAnswer: "JavaScript XML",
    },
    {
      question: "Which hook is used for side effects?",
      options: ["useState", "useRef", "useEffect", "useMemo"],
      correctAnswer: "useEffect",
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    // Check if correct
    if (selectedOption === QUIZ_DATA[currentIdx].correctAnswer) {
      setScore(score + 1);
    }

    // Move to next or finish
    if (currentIdx + 1 < QUIZ_DATA.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentIdx(0);
    setQuizFinished(false);
  };

  // Result Message Logic
  const getResultMessage = () => {
    if (score === 5) return "Excellent! 🌟";
    if (score >= 3) return "Good Job! 👍";
    return "Try Again! 📚";
  };

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Knowledge Quiz</Text>

        {!quizFinished ? (
          <View style={styles.quizCard}>
            {/* Progress Info */}
            <Text style={styles.progress}>
              Question {currentIdx + 1} of {QUIZ_DATA.length}
            </Text>

            {/* Question */}
            <Text style={styles.questionText}>
              {QUIZ_DATA[currentIdx].question}
            </Text>

            {/* Options */}
            <View style={styles.optionsContainer}>
              {QUIZ_DATA[currentIdx].options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.optionBtn}
                  onPress={() => handleAnswer(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                  <Ionicons name="chevron-forward" size={18} color="#6f2525" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ) : (
          <View style={styles.resultCard}>
            <Ionicons name="trophy" size={80} color="#c1a864" />
            <Text style={styles.resultTitle}>{getResultMessage()}</Text>
            <Text style={styles.scoreText}>Your Score: {score} / 5</Text>

            <TouchableOpacity style={styles.resetBtn} onPress={resetQuiz}>
              <Text style={styles.resetBtnText}>Restart Quiz</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#c1a864",
  },
  container: {
    padding: 20,
    paddingTop: 60,
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6f2525",
    marginBottom: 30,
  },
  quizCard: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
    borderRadius: 20,
    elevation: 5,
  },
  progress: {
    fontSize: 12,
    color: "#8b7355",
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 25,
  },
  optionsContainer: {
    gap: 12,
  },
  optionBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#c1a864",
    backgroundColor: "#fdfbf7",
  },
  optionText: {
    fontSize: 16,
    color: "#4a1919",
    fontWeight: "500",
  },

  // Result Styles
  resultCard: {
    backgroundColor: "#6f2525",
    width: "100%",
    padding: 40,
    borderRadius: 25,
    alignItems: "center",
    elevation: 10,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
  scoreText: {
    fontSize: 18,
    color: "#c1a864",
    marginTop: 10,
    marginBottom: 30,
  },
  resetBtn: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
  },
  resetBtnText: {
    color: "#6f2525",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default QuizApp;
