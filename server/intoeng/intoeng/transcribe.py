from transformers import pipeline
asr = pipeline("automatic-speech-recognition", model="openai/whisper-medium")

def transcribe(audio_data):
     # 음성 데이터를 파이프라인에 전달
     transcription = asr(audio_data)
     return transcription['text']  # 텍스트 추출