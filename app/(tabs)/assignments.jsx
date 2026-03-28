import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const router = useRouter();

  const addTask = () => {
    if (newTask.trim() === "") {
      Alert.alert("Please enter a task");
      setNewTask("");
      return;
    }
    const newItem = {
      id: Date.now().toString(),
      title: newTask,
      completed: false,
    };
    setTasks((prev) => [...prev, newItem]);
    // setTasks((prev) => [newItem, ...prev]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const renderTask = ({ item }) => (
    <TouchableOpacity
      style={styles.taskRow}
      onPress={() => toggleTask(item.id)}
    >
      <Ionicons
        name={item.completed ? "checkbox" : "square-outline"}
        size={24}
        color="#6f2525"
        style={{ marginRight: 10 }}
      />
      <Text style={[styles.taskText, item.completed && styles.completedText]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.header}>TODO APP</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter new task..."
          value={newTask}
          onChangeText={setNewTask}
          onSubmitEditing={addTask}
          returnKeyType="done" //i.e: "next" => UI improve
        />
        <TouchableOpacity style={styles.btn} onPress={addTask}>
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.taskContainer}>
        <Text style={styles.taskHeader}>Your Tasks</Text>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={renderTask}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/stForm")}
        >
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#c1a864",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 20,
    color: "#6f2525",
  },
  inputContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 2,
    borderColor: "#6f2525",
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  btn: {
    paddingHorizontal: 20,
    height: 40,
    backgroundColor: "#6f2525",
    justifyContent: "center",
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  taskContainer: {
    flex: 1,
    marginTop: 10,
  },
  taskHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6f2525",
    borderBottomWidth: 1,
    borderColor: "#6f2525",
    marginBottom: 10,
    paddingBottom: 5,
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  taskText: {
    fontSize: 16,
    color: "#333",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#666",
  },
  footer: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default TodoList;
