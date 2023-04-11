import React from 'react';

import {
  Box, Button, Divider, Paper, Stack, Text, TextInput, Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import GPTCompletion from '../../../components/bot_components/completion';
import { CreateCompletionRequest } from 'openai';
import { getCompletion } from '../../../utils/libs/openai-client';
import { IconThumbDown, IconThumbUp } from '@tabler/icons';

interface FormValues {
  input: string;
}

function generatePrompt({ input }: FormValues): CreateCompletionRequest {
  const prompt = `User tweet: ${input}

Tweet sentiment rating [Positive, Neutral, Negative]:`;

  return {
    model: 'text-davinci-002',
    prompt,
    max_tokens: 60,
    temperature: 0.8,
    stop: '\n',
  };
}

export default function TweetSentimentTranslator() {
  const form = useForm<FormValues>({
    initialValues: {
      input: 'Next I’m buying Coca-Cola to put the cocaine back in',
    },
    validate: {
      input: (value) => (value.length > 0 ? null : 'Invalid input'),
    },
  });
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<string | undefined>(undefined);
  const [openaiRequest, setOpenaiRequest] = React
    .useState<CreateCompletionRequest | undefined>(undefined);

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    const request = generatePrompt(values);
    setOpenaiRequest(request);
    await getCompletion(request).then((completion) => {
      setResult(completion && completion.choices
        ? completion.choices[0].text
        : 'No result, check the logs.');
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <Box sx={{ maxWidth: 500 }}>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack spacing="xs">
          <TextInput
            withAsterisk
            label="Enter tweet to get sentiment"
            {...form.getInputProps('input')}
          />
          <Button type="submit" loading={loading}>Classify!</Button>
          { (result && !loading)
          && (
            <>
              <Divider my="xs" />
              <Title order={4}>Result</Title>
              <Paper shadow="xs" p="md">
                <Text size="xl" align="center" style={{ verticalAlign: 'middle' }}>
                  { result.toLowerCase().indexOf('positive') >= 0
                    && <IconThumbUp style={{ verticalAlign: 'middle' }} color="green" /> }
                  { result.toLowerCase().indexOf('negative') >= 0
                    && <IconThumbDown style={{ verticalAlign: 'middle' }} color="red" /> }
                  { result }
                </Text>
              </Paper>
              <Title order={4}>GPT-3 Prompt</Title>
              { openaiRequest && <GPTCompletion request={openaiRequest} result={result} /> }
            </>
          )}
        </Stack>
      </form>
    </Box>
  );
}
