import { AddWinner } from '@/features/winners/components/AddWinner';
import { WinnersList } from '@/features/winners/components/WinnerList';
import { useWinnersApi } from '@/features/winners/hooks/useWinnersApi';
import { Box, VStack } from '@chakra-ui/react';

export const NewsPage = () => {
  const { unoWinners, chessWinners, foosBallWinner, tableTennisWinners } = useWinnersApi();
  return (
    <Box w="full" h="full" gap={4}>
      <VStack gap={4} width={{ base: '90%', md: '80%', lg: '60%' }} margin="auto">
        <Box w="full" border={1} p={4} mb={4} borderRadius="lg" borderWidth={2} boxShadow="sm">
          <AddWinner />
        </Box>
        <WinnersList gameName="FoosBall" winnerData={foosBallWinner} />
        <WinnersList gameName="UNO" winnerData={unoWinners} />
        <WinnersList gameName="Chess" winnerData={chessWinners} />
        <WinnersList gameName="Table Tennis" winnerData={tableTennisWinners} />
      </VStack>
    </Box>
  );
};
