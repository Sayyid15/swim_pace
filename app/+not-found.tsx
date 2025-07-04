import { Stack, Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
      <>
        <Stack.Screen options={{ title: 'Oops!' }} />
        <ThemedView style={styles.container}>
          <ThemedText type="title">This screen does not exist.</ThemedText>
          <Link href="/(auth)" style={styles.link}>
            <ThemedText type="link">Go to home screen!</ThemedText>
          </Link>
        </ThemedView>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  link: {
    marginTop: 20,
  },
});
